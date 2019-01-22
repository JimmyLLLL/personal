import React, { Component,Fragment } from 'react';
import { GlobalStyle} from './style.js';
import Header from './common/header';
import Body from './pages/body';
import Resume from './pages/resume';
import { BrowserRouter,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <Header/>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Body}></Route>
            <Route path="/resume" exact component={Resume}></Route>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
} 
export default App;
