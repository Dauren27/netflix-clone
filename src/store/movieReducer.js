const initialState = {
  movieName: "",
  movieBackdrop: "",
  movieOverview: "",
  moviePoster: "",
  movie: {},
};
export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        ...state,
        movieName: action.payload.name || action.payload.title || action.payload.movieName,
        movieBackdrop: action.payload.backdrop_path || action.payload.movieBackdrop,
        movieOverview: action.payload.overview || action.payload.movieOverview,
        moviePoster : action.payload.poster_path || action.payload.moviePoster,
      };
    case "GET_MOVIE_OBJ":
      return {
        ...state,movie:action.payload
      }
    default:
      return state;
  }
};
