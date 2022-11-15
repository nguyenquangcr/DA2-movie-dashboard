import Axios from "axios";
export function getMovieSoon() {

  return (dispatch) => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=5104"
    )
      .then((res) => {
          dispatch(getMovieSoonSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getMovieSoonFailed(error))
      });
    Axios.get(
    "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=5125"
    )
    .then((res) => {
        dispatch(getMovieSoonSuccess(res.data))
    })
    .catch((error) => {
        dispatch(getMovieSoonFailed(error))
    });
    Axios.get(
    "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=5163"
    )
    .then((res) => {
        dispatch(getMovieSoonSuccess(res.data))
    })
    .catch((error) => {
        dispatch(getMovieSoonFailed(error))
    });
    Axios.get(
    "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=5178"
        )
        .then((res) => {
            dispatch(getMovieSoonSuccess(res.data))
        })
        .catch((error) => {
            dispatch(getMovieSoonFailed(error))
        });
    Axios.get(
    "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=5200"
        )
    .then((res) => {
        dispatch(getMovieSoonSuccess(res.data))
        })
    .catch((error) => {
    dispatch(getMovieSoonFailed(error))
    });
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=4666"
          )
      .then((res) => {
          dispatch(getMovieSoonSuccess(res.data))
          })
      .catch((error) => {
      dispatch(getMovieSoonFailed(error))
      });
  };
}

function getMovieSoonSuccess(movie) {
    return {
      type: "POST-MOVIE-SOON_SUCCESS",
      payload: movie,
    };
  }
  
  function getMovieSoonFailed(error) {
    return {
      type: "POST-MOVIE-SOON_FAILED",
      payload: error,
    };
  }