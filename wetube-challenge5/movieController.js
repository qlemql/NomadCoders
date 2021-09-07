import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const getAdd = (req, res) => {
  res.render("add", { pageTitle: "Add" });
};

export const postAdd = (req, res) => {
  const movies = {
    title: "Godfather",
    synopsis: "it's a great",
    genres: ["Drama", "Action"],
  };
  res.redirect("/", { addmovies: addMovie(movies) });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
