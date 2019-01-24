import React, { Component } from 'react';
import { GlobalStyle} from './style.js';
import Header from './common/header';
import Body from './pages/body';
import Resume from './pages/resume';
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyle/>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Body}></Route>
              <Route path="/resume" exact component={Resume}></Route>
            </div>
          </BrowserRouter>         
        </Provider>
    );
  }
} 
export default App;
