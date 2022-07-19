import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const MovieIdPage2 = () => {
  const movieName = useSelector((state) => state.movieReducer.movieName);
  const movieBackdrop = useSelector(
    (state) => state.movieReducer.movieBackdrop
  );
  const movieOverview = useSelector(
    (state) => state.movieReducer.movieOverview
  );
  const movie=useSelector(state=>state.movieReducer.movie)
  const moviePoster = useSelector((state) => state.movieReducer.moviePoster);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch();
  const addToList = () => {
    dispatch({
      type: "ADD_TO_LIST",
      payload: { movieName, movieBackdrop, movieOverview },
    });
  };
  console.log(movie);
  return (
    <div className="movie">
      <Header showNav/>
      <div className="movie__content">
        <div className="movie__image">
          <img src={`${baseURL}${movie.poster_path}`} alt="" />
        </div>
        <div className="movie__description">
          <div className="description__title">
            <h1>{movie.name || movie.title}</h1>
            <h2>{movie.vote_average}<AiFillStar/></h2>
          </div>
          <div className="description__choose">
            <h3>Overview</h3>
            <h3>Trailer and more</h3>
          </div>
          <div className="description__overview">
            <p>{movie.overview}</p>
          </div>
          <div className="description__buttons">
          <button>
            <BsFillPlayFill />
            Play
          </button>
          <button>
            <AiOutlinePlus/>
            My List
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieIdPage2;
