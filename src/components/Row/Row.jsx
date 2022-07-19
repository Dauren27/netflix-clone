import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import YouTube from "react-youtube";
import instance from "../../request/axios";
import "./Row.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Row = ({ title, fetchURL, isLarge }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const navigateToMoviePage = (movie) => {
    dispatch({ type: "GET_MOVIE", payload: movie });
    dispatch({ type: "GET_MOVIE_OBJ", payload: movie });
    navigate(`/movie/${movie.name}`);
  };
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isLarge ? 6 : 5,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: isLarge ? 5 : 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: isLarge ? 4 : 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: isLarge ? 3 : 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: isLarge ? 2 : 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className={`${"row"} ${isLarge && "row__top__margin"}`}>
      <h2 className="row__title">{title}</h2>
      <div className={`${"row__container"} ${isLarge && "row__bigContainer"}`}>
        {/* <button className="row__button left" onClick={()=>sliderCarouselRight()}><MdOutlineNavigateNext/></button> */}
        <div className="row__line">
          <div className="row__posters">
            <Slider {...settings}>
              {movies.map((movie) => (
                <div
                  className={`${"row__poster"} ${isLarge && "row__bigPoster"}`}
                  key={movie.id}
                  onClick={() => navigateToMoviePage(movie)}
                >
                  <img
                    src={
                      isLarge
                        ? `${baseURL}${movie.poster_path}`
                        : `${baseURL}${movie.backdrop_path}`
                    }
                    alt={movie.name}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* <button className="row__button right" onClick={()=>sliderCarouselLeft()}><MdOutlineNavigateNext/></button> */}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
