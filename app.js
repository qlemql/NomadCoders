import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser, { urlencoded } from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

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

app.set("view engine", "pug");
app.use(cookieParser());
// cookieParser는 cookie를 전달 받아서 사용할 수 있도록 만들어주는 미들웨어
app.use(bodyParser.json());
// bodyParser는 사용자가 웹사이트로 전달하는 정보를 검사하는 미들웨어
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
// application에서 발생하는 모든 일들을 logging 하는 것
app.use(helmet());
// application이 더 안전하도록 만듬

// 아래와 같이 연결을 끊을 수 있다.
// const middleware = (req, res, next) => {
//   res.send("not happening");
// };
// app.get("/", middleware, handleHome); 사이에 middleware넣어주기

// app.get("/", handleHome); 허용할 수 없음

// app.get("/profile", handleProfile); 허용할 수 없음

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
