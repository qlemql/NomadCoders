import express from "express";

const videoRouter = express.Router();

videoRouter.get(routes.vidos, (req, res) => res.send("Home"));
videoRouter.get(routes.upload, (req, res) => res.send("Join"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("Login"));
videoRouter.get(routes.editVideo, (req, res) => res.send("Logout"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("Search"));

export default videoRouter;
