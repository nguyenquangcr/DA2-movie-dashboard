import React from 'react';
import logo from '../../assets/image/logo1.png';
import './style.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer-logo"><img src={logo} alt="" /></div>
                            <div className="footer-desc">Block Buster là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất.</div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h4 className="heading-left">Về chúng tôi</h4>
                            <ul className="footer-list">
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Về chúng tôi</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Thỏa thuận sử dụng</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Quy chế hoạt động</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Chính sách bảo mật</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h4 className="heading-left">Góc điện ảnh</h4>
                            <ul className="footer-list">
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Thể loại phim</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Bình luận phim</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Blog điện ảnh</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Phim hay tháng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h4 className="heading-left">Hỗ trợ</h4>
                            <ul className="footer-list">
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Góp ý</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Sale & services</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Rạp/Giá vé</a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-angle-right"></i>Tuyển dụng</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Công Ty Cổ Phần Phim Block Buster, Tầng 5, Toà Nhà Landmark, 23 Phan Bội Châu, Hồ Chí Minh
                </div>
            </div>
        </div>
    )
}

export default Footer
