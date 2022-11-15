import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { userService } from '../../Services'


const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Trường dữ liệu không được để trống!'),
    matKhau: yup.string().required('* Trường dữ liệu không được để trống!'),
    hoTen: yup.string().required('* Trường dữ liệu không được để trống!'),
    email: yup.string().required('* Trường dữ liệu không được để trống!').email('*Địa chỉ email không hợp lệ'),
    soDt: yup.string().matches(/^[0-9]+$/).required('* Trường dữ liệu không được để trống!'),
    maNhom: yup.string().required('* Trường dữ liệu không được để trống!')
})

class SignupScreen extends Component {
    _handleSubmit = (value) => {
        userService.signUp(value)
            .then(res => {
                // console.log(res);
                alert('Dang Ky Thanh Cong !')
            }).catch(err => {
                console.log(err);
            })
    }

    render() {

        const handleClosePopupSignup = () => {
            document.querySelector('[rel="js-header-signup"]').classList.remove('active');
        }

        return (
            <div className="popup header-signup" rel="js-header-signup">
                <div className="popup-content">
                    <div className="popup-header">
                        Đăng nhập
                        <i className="fa fa-close" onClick={() => handleClosePopupSignup()}></i>
                    </div>
                    <Formik
                        initialValues={{
                            taiKhoan: "",
                            matKhau: "",
                            hoTen: "",
                            email: "",
                            soDt: "",
                            maNhom: "GP05",
                            maLoaiNguoiDung: "KhachHang",
                        }}
                        validationSchema={signupUserSchema}
                        onSubmit={this._handleSubmit}
                        render={(formikProps) => (
                            <Form>
                                <div className='form-group'>
                                    <label className="popup-label">Tài khoản</label>
                                    <Field type='text' className='form-control' name='taiKhoan' placeholder="Nhập tài khoản" onChange={formikProps.handleChange} />
                                    <ErrorMessage name='taiKhoan'>
                                        {
                                            (msg) => <div className='alert alert-danger'>{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className='form-group'>
                                    <label className="popup-label mt-2">Mật khẩu</label>
                                    <Field type='password' className='form-control' name='matKhau' placeholder="Nhập mật khẩu" onChange={formikProps.handleChange} />
                                    <ErrorMessage name='matKhau'>
                                        {
                                            (msg) => <div className='alert alert-danger'>{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className='form-group'>
                                    <label className="popup-label mt-2">Họ tên</label>
                                    <Field type='text' className='form-control' name='hoTen' placeholder="Nhập họ tên" onChange={formikProps.handleChange} />
                                    <ErrorMessage name='hoTen'>
                                        {
                                            (msg) => <div className='alert alert-danger'>{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className='form-group'>
                                    <label className="popup-label mt-2">Email</label>
                                    <Field type='email' className='form-control' name='email' placeholder="Nhập địa chỉ email" onChange={formikProps.handleChange} />
                                    <ErrorMessage name='email'>
                                        {
                                            (msg) => <div className='alert alert-danger'>{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className='form-group'>
                                    <label className="popup-label mt-2">Số điện thoại</label>
                                    <Field type='text' className='form-control' name='soDt' placeholder="Nhập số điện thoại" onChange={formikProps.handleChange} />
                                    <ErrorMessage name='soDt'>
                                        {
                                            (msg) => <div className='alert alert-danger'>{msg}</div>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className='text-center'>
                                    <button className='btn btn-success'>Đăng ký</button>
                                </div>
                            </Form>

                        )} />
                </div>
            </div>
        );
    }
}

export default SignupScreen;