export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Challenge";
  next();
};
