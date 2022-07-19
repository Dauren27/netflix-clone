import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { AiOutlinePlus } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs";
import "./MovieIdPage.scss";
const MovieIdPage = () => {
  const movieName = useSelector((state) => state.movieReducer.movieName);
  const movieBackdrop = useSelector(
    (state) => state.movieReducer.movieBackdrop
  );
  const movieOverview = useSelector(
    (state) => state.movieReducer.movieOverview
  );
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch();
  const addToList = () => {
    dispatch({type:"ADD_TO_LIST",payload: {movieName,movieBackdrop,movieOverview}})
  };
  console.log(movieBackdrop);
  return (
    <div className="movie">
      <img
        className="movie__background"
        src={`${baseURL}${movieBackdrop}`}
        alt=""
      />
      <Header showNav />
      <div className="movie__content">
        <h1 className="movie__title">{movieName}</h1>
        <p className="movie__overview">{movieOverview}</p>
        <div className="movie__buttons">
          <button>
            <BsFillPlayFill />
            Play
          </button>
          <button onClick={() => addToList()}>
            <AiOutlinePlus/>  
            My List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieIdPage;
