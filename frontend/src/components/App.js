import React from "react";
import NewPost from "./NewPost";
import { Route, NavLink, Switch } from "react-router-dom";
import Post from "./Post";
import './App.css';

import Home from "./Home";

/** Overall blog application:
 *
 * - shows header, nav links, and contains routes to:
 *   - new form
 *   - homepage
 *   - individual posts
 */

function App() {

  return (

    <div className="App-wrapper">
      <div className="App container">
        <header>
          <div className="Retro">
            <h1 className="Retro-custom">-=CYBERTECH-BLOG=-</h1>
            <p className="lead"> Get in the Rithm of tech-blogging! </p>
            <nav className="navigation-retro">
              <b className="emoji">👾</b>
              <NavLink exact to="/">BLOG</NavLink>
              <b className="emoji">👾</b>
              <NavLink exact to="/new">ADD POST</NavLink>
            </nav>
          </div>
        </header>
      </div>

      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;