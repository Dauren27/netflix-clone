const initialState = {
    movies: [],
  };
 
  export const listReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_LIST":
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              movieName: action.payload.movieName || action.payload.title,
              movieBackdrop: action.payload.movieBackdrop,
              movieOverview: action.payload.movieOverview,
            },
          ],
        };
      default:
        return state;
    }
  };