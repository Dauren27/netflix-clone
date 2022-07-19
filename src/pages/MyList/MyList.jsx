import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import "./MyList.scss";
const MyList = () => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const movies = useSelector((state) => state.listReducer.movies);
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const navigateToMoviePage = (movie) => {
    dispatch({ type: "GET_MOVIE", payload: movie });
    navigate(`/movie/${movie.name}`);
    console.log(movie);
  };
  console.log(movies);
  return (
    <div className="list">
      <Header showNav />
      <h1 className="list__title">My List</h1>
      <div className="list__movies">
        {movies.map((movie) => (
          <div
            className={`${"list__movie"} ${movies.length > 4 && "less__movie"}`}
          >
            <img
              onClick={() => navigateToMoviePage(movie)}
              src={`${baseURL}${movie.movieBackdrop}`}
              alt={movie.movieName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
