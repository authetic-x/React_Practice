import React, {Fragment} from 'react';
import {GlobalStyle} from './style.js';
import {GlobalFont} from "./static/iconfont/iconfont"
import store from "./store/index"
import Header from "./common/header/index"
import {Provider} from "react-redux"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalFont />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
