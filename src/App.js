import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import SymbolPage from './Pages/SymbolPage';
import {//below for using the router for spa navigation
  BrowserRouter as Router,
  Route,
  Switch, //for getting first match of route
} from 'react-router-dom'; //get with: npm install --save react-router-dom
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Router> {/* wrapping entire app("App") with router tag makes sure browser is listening to URL */}
      <NavBar/>
      <Switch>{/* renders first matching route to url */}
      <Route path="/" component={HomePage} exact/>
      <Route path="/symbol/:symbolName" component={SymbolPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
