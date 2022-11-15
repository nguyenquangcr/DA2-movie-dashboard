const initialState = {
    danhSachGhe: [],
    thongTinPhim: [],
  };
  
  function bookingReducer(state = initialState, actions) {
    const { type, payload } = actions;
    switch (type) {
      case "GET_BOOKING_SUCCESS": {
        return { ...state, danhSachGhe: payload.danhSachGhe };
      }
      case "GET_INFO_BOOKING_SUCCESS": {
        return { ...state, thongTinPhim: payload.thongTinPhim };
      }
      case "CHON_GHE": {
        const index = state.danhSachGhe.findIndex(
          (ghe) => ghe.maGhe === payload.maGhe
        );
        const gheCU = state.danhSachGhe[index];
        const gheMoi = { ...gheCU, dangChon: !gheCU.dangChon };
        state.danhSachGhe[index] = gheMoi;
        const danhSachGhe = [...state.danhSachGhe];
        return { ...state, danhSachGhe };
      }
      default:
        return state;
    }
  }
  
export default bookingReducer;
  