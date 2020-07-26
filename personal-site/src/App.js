import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './Components/MenuBar';
import Footer from './Components/Footer';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import Home from  './Components/Home';
import About from './Components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
const history = createHistory();


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <MenuBar  />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" exact component={About} />
        </Switch>
       
      </Router>

      <footer> <Footer /></footer>
    </div>

      //<Route path="/search" exact component={SearchPage} />
    // <div className="App">
    //   <header className="App-header">
    //     // <MenuBar/>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
