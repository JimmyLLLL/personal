import React, { Component } from 'react';
import { GlobalStyle} from './style.js';
import Body from './pages/body';
import Resume from './pages/resume';
import Project from './pages/project'
import Blog from './pages/blog'
import Article from './pages/blog/pages/article'
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyle/>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Body}></Route>
              <Route path="/resume" exact component={Resume}></Route>
              <Route path="/project" exact component={Project}></Route>
              <Route path="/blog" exact component={Blog}></Route>
              <Route path="/blog/article/:id" exact component={Article}></Route>
            </div>
          </BrowserRouter>         
        </Provider>
    );
  }
} 
export default App;
