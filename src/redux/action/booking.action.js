import Axios from "axios";

export function getBookingRequest(maLichChieu) {
  return async (dispatch) => {
    try {
      const res = await Axios.get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
      );
      console.log(res.data);
      dispatch(getBookingSuccess(res.data));
      dispatch(getInfoBookingSuccess(res.data));
    } catch (err) {
      dispatch(getBookingFailed(err));
      dispatch(getInfoBookingFailed(err))
    }
  }
}

function getBookingSuccess(booking) {
  return {
    type: "GET_BOOKING_SUCCESS",
    payload: booking,
  };
}

function getBookingFailed(error) {
  return {
    type: "GET_BOOKING_FAILED",
    payload: error,
  };
}

function getInfoBookingSuccess(booking) {
  return {
    type: "GET_INFO_BOOKING_SUCCESS",
    payload: booking,
  };
}

function getInfoBookingFailed(error) {
  return {
    type: "GET_INFO_BOOKING_FAILED",
    payload: error,
  };
}

//dat ve 
export function postBookingRequest(maLichChieu, danhSachVe, history) {
  return async function (dispatch) {
    console.log(maLichChieu, danhSachVe, history);
    try {
      // getlocal
      const user = JSON.parse(localStorage.getItem("credentials"));
      // call api
      const res = await Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      if (res.status === 200 || res.status === 201) {
        alert("Thành công");
        history.push('/')
      }
    } catch (error) { }
  };
}