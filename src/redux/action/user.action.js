import { userService } from "../../Services";


export const login = (user,history) =>{
    return (dispatch) =>{
        userService.signIn(user)
        .then(res=>{
            if(res.data.maLoaiNguoiDung === "KhachHang"){
                dispatch(loginUser(res.data));
                localStorage.setItem('credentials',JSON.stringify(res.data))
                //history.push("/");
                document.querySelector('[rel="js-header-signin"]').classList.remove('active');
            }else{
                // alert('Vui lòng nhập tài khoản khách hàng!');
                alert('Sai tên đăng nhập/mật khẩu! Vui lòng thử lại!');
            }
        })
        .catch(err =>{
            alert('Sai tên đăng nhập/mật khẩu! Vui lòng thử lại!');
            console.log(err);
        })
    }
}

function loginUser(userLogin) {
    return {
      type: "FETCH_CREDENTIAL",
      payload: userLogin,
    };
  }