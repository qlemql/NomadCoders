import express from "express";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("USERDETAIL"));
userRouter.get(routes.editProfile, (req, res) => res.send("Login"));
userRouter.get(routes.changePassword, (req, res) => res.send("Logout"));

export default userRouter;

// userRouter.get("/", (req, res) => res.send("user index")); 예시
// userRouter.get("/edit", (req, res) => res.send("user edit")); 예시
// userRouter.get("/password", (req, res) => res.send("user password")); 예시
