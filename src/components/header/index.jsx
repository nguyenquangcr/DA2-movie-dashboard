import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo1.png'
import './style.scss';
import SigninScreen from '../../Screen/Signin'
import SignupScreen from '../../Screen/Signup';
import { actSearchFilm } from '../../redux/action/movie.action';

const Header = (props) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const listSearchMovie = useSelector(state => state.movie.listMovieSearch);
    const debouncedSearchTerm = useDebounce(searchValue, 500);
    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(actSearchFilm(debouncedSearchTerm))
        } else {
            dispatch({
                type:'CLEAR-LIST-SEARCH-FILM',
            })
        }
    }, [debouncedSearchTerm])

    const _clearItem = () => {
        localStorage.removeItem('credentials');
        dispatch({
            type: 'CLEAR_CREDENTIAL'
        })
    }

    const handleHeaderBarClick = (e) => {
        e.target.classList.toggle('active');
        document.querySelector('[rel="js-header-menu"]').classList.toggle('active');
    }

    const handleHeaderMenuDropdown = (e) => {
        e.preventDefault();
        e.target.parentNode.nextElementSibling.classList.toggle('active');
    }

    const handleShowPopupSignin = () => {
        document.querySelector('[rel="js-header-signin"]').classList.add('active');
    }

    const handleShowPopupSignup = () => {
        document.querySelector('[rel="js-header-signup"]').classList.add('active');
    }

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    }
    const renderSearchMovie = () => {
        return listSearchMovie && listSearchMovie.map((item, index) => {
            return (
                <li><Link to={`/phim/${item.biDanh}-${item.maPhim}`} key={index}>{item.tenPhim}</Link></li>
            )
        })
    }
    return (
        <div className="header-container">
            <div className="container">
                <div className="header-content">
                    <div className="header-logo">
                        <NavLink className="" to='/'><img className="header-logo-img" src={logo} alt="" /></NavLink>
                        <div className="header-bar" onClick={(e) => handleHeaderBarClick(e)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="header-menu" rel="js-header-menu">
                        <ul className="header-menu-left">
                            <li className="header-menu-item">
                                <NavLink exact activeClassName={'active'} to='/' className="header-menu-link">Trang ch???</NavLink>
                            </li>
                            <li className="header-menu-item">
                                <NavLink className="header-menu-link" to='/phim'>Phim
                                {/* <i className="fa fa-angle-down" aria-hidden="true" onClick={(e) => handleHeaderMenuDropdown(e)}></i> */}
                                </NavLink>
                                {/* <ul className="header-menu-dropdown">
                                    <li className="dropdown_item header-menu-dropdown-item"><NavLink className="header-menu-dropdown-link" to='/phim-dang-chieu'>Phim ??ang chi???u</NavLink></li>
                                    <li className="dropdown_item header-menu-dropdown-item"><NavLink className="header-menu-dropdown-link" to='/phim-sap-chieu'>Phim s???p chi???u</NavLink></li>
                                </ul> */}
                            </li>
                            <li className="header-menu-item">
                                <NavLink className="header-menu-link" to='/tin-tuc'>Tin t???c<i className="fa fa-angle-down" aria-hidden="true" onClick={(e) => handleHeaderMenuDropdown(e)}></i></NavLink>
                                <ul className="header-menu-dropdown">
                                    <li className="dropdown_item header-menu-dropdown-item"><NavLink className="header-menu-dropdown-link" to='/goc-dien-anh'>G??c ??i???n ???nh</NavLink></li>
                                    <li className="dropdown_item header-menu-dropdown-item"><NavLink className="header-menu-dropdown-link" to='/su-kien'>S??? ki???n</NavLink></li>
                                </ul>
                            </li>
                            <li className="header-menu-item">
                                <NavLink className="header-menu-link" to='/ho-tro'>H??? tr???</NavLink>
                            </li>

                        </ul>
                        <ul className="header-menu-right">
                            {
                                props.credentials ?
                                <li style={{ display: 'flex' }} className="header-menu-item">
                                    <span className="header-menu-link">Hi {props.credentials.hoTen},</span>
                                    <button onClick={() => _clearItem()} className="btn btn-success">Tho??t</button>
                                </li>
                                :
                                <>
                                    <li className="header-menu-item">
                                        <span className="header-menu-link header-menu-signup" onClick={() => handleShowPopupSignup()}>????ng K??</span>
                                    </li>
                                    <li className="header-menu-item">
                                        <span className="header-menu-link header-menu-signin" onClick={() => handleShowPopupSignin()}>????ng Nh???p</span>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                    <div className="header-search">
                        <select className="header-search-select">
                            <option>??ang chi???u</option>
                            <option>S???p chi???u</option>
                        </select>
                        <input value={searchValue} onChange={(e) => onChangeSearchValue(e)} className="header-search-input" type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
                        <i className="fa fa-search header-search-icon"></i>
                        
                        <ul className="header-search-result scroll-custom">
                            {renderSearchMovie()}
                        </ul>
                    </div>
                    <div className="header-social">
                        <span>Theo d??i: </span>
                        <a href="#link-facebook"><i className="fa fa-facebook" /></a>
                        <a href="#link-twitter"><i className="fa fa-twitter" /></a>
                        <a href="#link-googleplus"><i className="fa fa-google-plus" /></a>
                        <a href="#link-youtube"><i className="fa fa-youtube" /></a>
                    </div>
                </div>
            </div>
            <SigninScreen />
            <SignupScreen />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        credentials: state.user.credentials
    }
}

export default connect(mapStateToProps)(Header)
