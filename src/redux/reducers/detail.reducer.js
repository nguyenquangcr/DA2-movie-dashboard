const initialState = {
    maPhimCommingSoon:['5104','5125','5163','5178','5200','4666'],
    detailMovie: [],
    listStar: [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
    ],
    comment:[
      {user : 'Nguyên Vũ',
      star: 3,
      comment: 'Hay tuyệt !'},
      {user : 'Vũ Nguyên',
      star: 5,
      comment: 'Phim rất hay mong có phần tiếp theo !'}
    ],
    trailer:null
  };
  
function detailReducer(state = initialState, actions) {
    const { type, payload } = actions;
    switch (type) {
      case "GET_DETAIL_MOVIE_SUCCESS": {
        return { ...state, detailMovie: payload };
      }
      case 'EDIT-COMMENT': {
        const newComment = [...state.comment];
        newComment.push(payload);
        return {...state, comment:newComment}
      }
      case 'TRALER-DETAIL': {
        return { ...state, trailer: payload };
      }
      default:
        return state;
    }
  }
  
export default detailReducer;