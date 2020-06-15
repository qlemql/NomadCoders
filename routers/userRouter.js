import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (req, res) =>
  res.send("Change Password")
);

export default userRouter;

// userRouter.get("/", (req, res) => res.send("user index")); 예시
// userRouter.get("/edit", (req, res) => res.send("user edit")); 예시
// userRouter.get("/password", (req, res) => res.send("user password")); 예시
