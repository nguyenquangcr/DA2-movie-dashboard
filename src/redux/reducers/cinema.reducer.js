const initalState = {
    listCinema: [
    ],
    listDetailCinema: [
    ],
    listMovieDetailByLocation:null,
    maCumRap: "",
    maCumRapFirst: "",
    isValid: true,
    isValidCinema: false,
}

export const cinemaReducer = (state=initalState , action) =>{
    let { type, payload} = action;
    switch (type) {
        case 'GET_CINEMA_lIST_SUCCESS':
            return {...state,listCinema:payload};
        case 'GET_CINEMA_DETAIL_SUCCESS':
            return {...state,listDetailCinema:payload}
        case 'GET_LIST_MOVIE_DETAIL_BY_LOCATION_SUCCESS':
            return {...state,listMovieDetailByLocation:payload}
        default:
            return state;
    }
}