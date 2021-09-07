import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  console.log(getMovies());
  const movies = getMovies();
  res.render("movies", { pageTitle: "Movies!", movies });
};

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const { title, description_full: des, genres } = getMovieById(id);
  res.render("detail", { pageTitle: title, des, genres });
};

export const filterMovie = (req, res) => {
  const {
    query: { year, rating },
  } = req;
  if (year) {
    const movies = getMovieByMinimumYear(year);
    res.render("movies", { pageTitle: `Searching by year: ${year}`, movies });
  } else if (rating) {
    const movies = getMovieByMinimumRating(rating);
    res.render("movies", {
      pageTitle: `Searching by rating: ${rating}`,
      movies,
    });
  } else {
    res.render("404", { pageTitle: "404 NOT FOUND" });
  }
};
