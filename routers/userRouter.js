import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;

// userRouter.get("/", (req, res) => res.send("user index")); 예시
// userRouter.get("/edit", (req, res) => res.send("user edit")); 예시
// userRouter.get("/password", (req, res) => res.send("user password")); 예시
