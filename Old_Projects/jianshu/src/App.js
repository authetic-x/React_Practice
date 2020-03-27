import React, {Fragment} from 'react';
import {GlobalStyle} from './style.js';
import {GlobalFont} from "./static/iconfont/iconfont"
import store from "./store/index"
import Header from "./common/header/index"
import {Provider} from "react-redux"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import SignIn from './pages/login/signin'
import SignUp from './pages/login/signup'
import Write from './pages/write'
import CheckLogin from './components/checkLogin'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalFont />
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/' exact>
            <CheckLogin />
            <Header />
            <Home />
          </Route>
          <Route path='/detail/:id' exact>
            <CheckLogin />
            <Header />
            <Detail />
          </Route>
          <Route path='/sign_in' exact>
            <SignIn />
          </Route>
          <Route path='/sign_up' exact>
            <SignUp />
          </Route>
          <Route path='/write' exact>
            <CheckLogin />
            <Write />
          </Route>
          <Route path='/write/:id' exact>
            <CheckLogin />
            <Write />
          </Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
