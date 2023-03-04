import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send({
    message: "Hello from auth router!",
  });
});

export default authRouter;
