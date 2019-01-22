import React, { Component,Fragment } from 'react';
import { GlobalStyle,Bgpic,BgpicWrapper,Bottom } from './style.js';
import Header from './common/header';
import Body from './common/body';
import { BrowserRouter,Route,Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <BgpicWrapper>
          <Bgpic></Bgpic>
        </BgpicWrapper>
        <Header/>
        <BrowserRouter>
          <Route path="/" exact component={Body}></Route>
        </BrowserRouter>
        <Bottom>
          <span className="left">开发者：JimmyLam</span>
          <span className="right">Wechat:Jm18025012926</span>
        </Bottom>
      </Fragment>
    );
  }
} 
export default App;
