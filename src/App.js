import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

function App() { 
  return (    
    <div style={{fontFamily : 'Roboto'}}>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/post/:postId">
              <PostDetails></PostDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
