import React, {Fragment} from 'react';
import {GlobalStyle} from './style.js';
import {GlobalFont} from "./static/iconfont/iconfont"
import store from "./store/index"
import Header from "./common/header/index"
import {Provider} from "react-redux"

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalFont />
      <Provider store={store}>
        <Header />
      </Provider>
    </Fragment>
  );
}

export default App;
