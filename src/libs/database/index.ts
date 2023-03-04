import knex from "knex";

declare var process: {
  env: {
    DB_HOST: string;
    DB_USER: string;
    DB_PASS: string;
    DB_PORT: number;
    DB_DB: string;
  };
};

const { DB_HOST, DB_USER, DB_PASS, DB_PORT, DB_DB } = process.env;

export default knex({
  client: "mysql",
  pool: {
    min: 1,
    max: 1,
  },
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: DB_DB,
  },
});
