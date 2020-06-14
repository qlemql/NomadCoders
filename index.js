import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("blablabla");

//middleware "/" 사이와 handleHome 사이에서 발생
// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

// app.use(betweenHome);
//원하는 만큼 middlewave를 넣을 수 있다.

app.use(helmet());
app.use(morgan("dev"));

// 아래와 같이 연결을 끊을 수 있다.
// const middleware = (req, res, next) => {
//   res.send("not happening");
// };
// app.get("/", middleware, handleHome); 사이에 middleware넣어주기

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
