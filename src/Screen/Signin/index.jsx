import React from 'react';
import { Form, Formik, Field } from 'formik';
// import { connect } from 'react-redux';
import { login } from '../../redux/action/user.action';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function SigninScreen() {

    const dispatch = useDispatch(); // giống this.props.dispatch
    const history = useHistory();

    const handleClosePopupSignin = () => {
        document.querySelector('[rel="js-header-signin"]').classList.remove('active');
    }

    return (
        <Formik
            initialValues={{
                taiKhoan: '',
                matKhau: ''
            }}
            onSubmit={(value) => {
                dispatch(login(value, history))
                // console.log(value);
            }}
            render={({ handleChange }) => (
                <div className="popup header-signin" rel="js-header-signin">
                    <div className="popup-content">
                        <Form>
                            <div className="popup-header">
                                Đăng nhập
                                    <i className="fa fa-close" onClick={() => handleClosePopupSignin()}></i>
                            </div>
                            <div className='form-group'>
                                <label className="popup-label">Tài Khoản</label>
                                <Field type='text' className='form-control' name='taiKhoan' placeholder="Nhập tài khoản" onChange={handleChange} />
                                <label className="popup-label mt-4">Mật Khẩu</label>
                                <Field type='password' className='form-control' name='matKhau' placeholder="Nhập mật khẩu" onChange={handleChange} />
                            </div>
                            <div className="text-center">
                                <button className='btn btn-success'>Đăng Nhập</button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        />

    );
}
