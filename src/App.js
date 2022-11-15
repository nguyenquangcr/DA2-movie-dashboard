import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch } from "react-redux";
import Home from './Screen/Home';
import SignupScreen from './Screen/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SigninScreen from './Screen/Signin';
import Movie from './Screen/Movie';
import Booking from './Screen/Booking';
import Detail from './Screen/Detail';
import { getMovieSoon } from './redux/action/moviesoon.action';




function App() {
  const credentialStr = localStorage.getItem("credentials");
  const dispatch = useDispatch();

  const _getMovieSoon = () => {
    dispatch(
      getMovieSoon()
    )
  }

  const _getCredentialFromLocal = () => {
    if (credentialStr) {
      dispatch(
        {
          type: "FETCH_CREDENTIAL",
          payload: JSON.parse(credentialStr),
        }
      )
    }
  }
  useEffect(() => {
    _getMovieSoon()
    _getCredentialFromLocal()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/dangky'  component={SignupScreen} />
        <Route path='/dangnhap'  component={SigninScreen} />
        <Route path='/' exact={true} component={Home}>
        </Route>
        <Route path="/dat-ve/:maLichChieu">
          <Booking />
        </Route>
        <Route path='/phim' exact={true} component={Movie}>
        </Route>
        <Route path="/phim/:tenPhim:maPhim">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


 