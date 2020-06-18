import express from "express";

const app = express();

const home = (req, res) => res.send("Home");
const aboutUs = (req, res) => res.send("About Us");
const contact = (req, res) => res.send("Contact");
const middleWare = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};
app.use(middleWare);
app.get("/", home);
app.get("/about-us", aboutUs);
app.get("/contact", contact);

const protect = (req, res) => res.send("Protected");

const middleWareTwo = (req, res, next) => {
  res.redirect("/");
  console.log("I'm a middleware");
};

app.get("/protected", middleWareTwo, protect);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
