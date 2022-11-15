import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import commonReducer from "./common.reducer";
import UserReducer from "./user.reducer";
import bookingReducer from "./booking.reducer";
import { cinemaReducer } from "./cinema.reducer";
import detailReducer from './detail.reducer';

const rootReducer = combineReducers({
    booking: bookingReducer,
    movie: movieReducer,
    user: UserReducer,
    common:commonReducer,
    cinema:cinemaReducer,
    detail:detailReducer
  });
  
  export default rootReducer;