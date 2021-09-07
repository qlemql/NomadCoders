import express from "express";
import {
  home,
  join,
  login,
  account,
  courses,
  coursesNew,
  coursesMine,
  documentation,
  buy,
  refund,
  remove,
  edit,
} from "./controller";

const app = express();

//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const ACCOUNT = "/confirm-account";

//courses
const COURSES = "/courses";
const COURSES_NEW = "/courses-new";
const COURSES_MINE = "/courses-mine";

//api
const DOCUMENTATION = "/documentation";

//v1
const BUY = "/buy";
const REFUND = "/refund";
const REMOVE = "/remove";

//v2
const EDIT = "/edit";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  account: ACCOUNT,
  courses: COURSES,
  coursesNew: COURSES_NEW,
  coursesMine: COURSES_MINE,
  documentation: DOCUMENTATION,
  buy: BUY,
  refund: REFUND,
  remove: REMOVE,
  edit: EDIT,
};

//globalRouter
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.account, account);

//coursesRouter
const coursesRouter = express.Router();

coursesRouter.get(routes.courses, courses);
coursesRouter.get(routes.coursesNew, coursesNew);
coursesRouter.get(routes.coursesMine, coursesMine);

//apiRouter
const apiRouter = express.Router();

apiRouter.get("/", documentation);

//v1Router
const v1Router = express.Router();

v1Router.get(routes.buy, buy);
v1Router.get(routes.refund, refund);
v1Router.get(routes.remove, remove);

//v2Router
const v2Router = express.Router();

v2Router.get("/", edit);

app.use(routes.home, globalRouter);
app.use(routes.join, globalRouter);
app.use(routes.login, globalRouter);
app.use(routes.account, globalRouter);
app.use("/", coursesRouter);
app.use(routes.coursesNew, coursesRouter);
app.use(routes.coursesMine, coursesRouter);
app.use(routes.documentation, apiRouter);
app.use("/", v1Router);
app.use(routes.refund, v1Router);
app.use(routes.remove, v1Router);
app.use(routes.edit, v2Router);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
