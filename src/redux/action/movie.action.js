import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";
export function getMovieListRequest() {
  return (dispatch) => {
    // start loading
    dispatch(startLoading());
    // call api
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05"
    )
      .then((res) => {
        dispatch(getMovieListSuccess(res.data));
        dispatch(stopLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(getMovieListFailed(error));
        // stop loading
        dispatch(stopLoading());
      });
  };
}

function getMovieListSuccess(movieList) {
  return {
    type: "GET_MOVIE_lIST_SUCCESS",
    payload: movieList,
  };
}

function getMovieListFailed(error) {
  return {
    type: "GET_MOVIE_lIST_FAILED",
    payload: error,
  };
}

export function getMovieDetailRequest(movieCode) {
  return function (dispatch) {
    // call api
    Axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`
    )
      .then(function (res) {
        console.log(res);
        dispatch(getMovieDetailSuccess(res.data));
      })
      .catch(function (err) {
        console.log(err);
        dispatch(getMovieDetailFailed(err));
      });
  };
}

function getMovieDetailSuccess(movieDetail) {
  return {
    type: "GET_MOVIE_DETAIL_SUCCESS",
    payload: movieDetail,
  };
}
function getMovieDetailFailed(error) {
  return {
    type: "GET_MOVIE_DETAIL_FAILED",
    payload: error,
  };
}

export const actGetListDetailFilm = (id) => {
  return function (dispatch) {
    // call api
      if(id){
        Axios.get(
          `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
        )
          .then(function (res) {
            dispatch(getListDetailHome(res.data))
          })
          .catch(function (err) {
            //
          });
      }
  };
}

function getListDetailHome(film) {
  return {
    type: "GET-LIST-DETAIL-HOME",
    payload: film,
  };
}

//search movie

export const actSearchFilm = (keyWord) => {
  return function (dispatch) {
    // call api
      if(keyWord){
        Axios.get(
          `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&tenPhim=${keyWord}&soTrang=1&soPhanTuTrenTrang=10000`
        )
          .then(function (res) {
            dispatch(getListSearchFilm(res.data.items))
          })
          .catch(function (err) {
            console.log(err);
          });
      }
  };
}

function getListSearchFilm(film) {
  return {
    type: "GET-SEARCH-FILM",
    payload: film,
  };
}
