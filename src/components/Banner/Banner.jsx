import React, { useEffect, useState } from "react";
import instance from "../../request/axios";
import requests from "../../request/request";
import "./Banner.scss";
import { BsFillPlayFill } from "react-icons/bs"; 
import { AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      console.log(movie);
      return request;
    }
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const addToList = () => {
    dispatch({
      type: "ADD_TO_LIST",
      payload: {
        movieName: movie.name,
        movieOverview: movie.overview,
        movieBackdrop: movie.backdrop_path,
      },
    });
  };
  const navigate=useNavigate()
  const navigateToMoviePage = (movie) => {
    dispatch({ type: "GET_MOVIE", payload: movie });
    navigate(`/movie/${movie.name}`);
    console.log(movie);
  };
  console.log(movie);
  return (
    <div className="banner">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt=""
      />
      <div className="content">
        <h1 className="content__title">{movie.name}</h1>
        <h3 className="content__overview">{movie.overview}</h3>
        <div className="content__buttons">
          <button onClick={()=>navigateToMoviePage(movie)}>
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

export default Banner;
