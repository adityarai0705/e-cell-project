import ReactDOM from "react-dom/client";
import React from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from './JsElements/NavBar.js';
import Dashboard from './JsElements/Dashboard';
import ContestPage from './JsElements2/ContestPage';
import Footer from './JsElements2/Footer.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes> 
          <Route path='/' element={<ContestPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
