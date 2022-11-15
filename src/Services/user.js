import Axios from 'axios';

class UserService{
    signUp(value) {
        return (
            Axios({
                method: 'POST',
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                data: value,
            })
        )
    }
    signIn(user){
        return(
            Axios({
                method:'POST',
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                data: user
            })
        )
    }
}

export default UserService;