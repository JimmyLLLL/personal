import React, { Component } from 'react';
import { GlobalStyle} from './style.js';
import Body from './pages/body';
import Resume from './pages/resume';
import Project from './pages/project'
import Blog from './pages/blog'
import Article from './pages/blog/pages/article'
import Personalblog from './pages/blog/pages/personalBlog'
import Otherusercenter from './pages/blog/pages/otherUserCenter'
import { Route,HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyle/>
          <HashRouter>
            <div>
              <Route path="/" exact component={Body}></Route>
              <Route path="/resume" exact component={Resume}></Route>
              <Route path="/project" exact component={Project}></Route>
              <Route path="/blog" exact component={Blog}></Route>
              <Route path="/blog/article/:id" exact component={Article}></Route>
              <Route path="/blog/personalBlog/:name" exact component={Personalblog}></Route>
              <Route path="/blog/personalBlog" exact component={Personalblog}></Route>
              <Route path="/blog/otherUserCenter/:name" exact component={Otherusercenter}></Route>
            </div>
          </HashRouter>         
        </Provider>
    );
  }
} 
export default App;
