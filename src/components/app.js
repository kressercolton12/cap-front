import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './navigation/nav-bar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
           <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/about-us" component={About} />

            <Route exact path="/contact" component={Contact} />

            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </div>
    );
  }
}
