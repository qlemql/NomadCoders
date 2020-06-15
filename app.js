import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser, { urlencoded } from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

// const handleHome = (req, res) => res.send("Hello from home"); 허용할 수 없음

// const handleProfile = (req, res) => res.send("blablabla"); 허용할 수 없음

//middleware "/" 사이와 handleHome 사이에서 발생
// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

// app.use(betweenHome);
//원하는 만큼 middlewave를 넣을 수 있다.

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// 아래와 같이 연결을 끊을 수 있다.
// const middleware = (req, res, next) => {
//   res.send("not happening");
// };
// app.get("/", middleware, handleHome); 사이에 middleware넣어주기

// app.get("/", handleHome); 허용할 수 없음

// app.get("/profile", handleProfile); 허용할 수 없음

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;
