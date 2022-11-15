const initialState = {
    movieList: null,
    movieInfo: null,
    listDetailFilm: {},
    listSoonMovie: [],
    listMovieSearch:[]
  };
  
  const movieReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case "GET_MOVIE_lIST_SUCCESS": {
        return { ...state, movieList: payload };
      }
      case "GET_MOVIE_DETAIL_SUCCESS": {
        return { ...state, movieInfo: payload };
      }
      case 'GET-LIST-DETAIL-HOME' :{
        return {...state, listDetailFilm: payload};
      }
      case 'POST-MOVIE-SOON_SUCCESS':{
        const newMovieSoon = [...state.listSoonMovie];
        newMovieSoon.push(payload);
        return {...state, listSoonMovie:newMovieSoon}
      }
      case 'GET-SEARCH-FILM':{
        return { ...state, listMovieSearch: payload };
      }
      case 'CLEAR-LIST-SEARCH-FILM':{
        return {...state, listMovieSearch: []};
      }
      default:
        return state;
    }
  };
  
  export default movieReducer;