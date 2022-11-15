import Axios from "axios";

export function getDetailMovie(maPhim) {
    return (dispatch) =>{
        Axios.get(
            `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        ).then(res =>{
            dispatch(getCinemaListSuccess(res.data))
        })
        .catch(err =>{
            getCinemaListFailed(err)
        })
    }
}

function getCinemaListSuccess(cinema) {
    return {
      type: "GET_DETAIL_MOVIE_SUCCESS",
      payload: cinema,
    };
  }
  
  function getCinemaListFailed(error) {
    return {
      type: "GET_DETAIL_MOVIE_FAILED",
      payload: error,
    };
}
//post comment
