import './App.css';
import Home from "./components/home"
import Navbar from "./components/navbar"
import React from "react";
import Login from "./components/login"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
<Router>
<Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login"  element={  <Login/> } >
 
          </Route>
          <Route path="/users_management">
     
          </Route>
          <Route path="/" element={  <Home/>}>
        
          </Route>
        </Routes>

    </Router>


    </div>
  );
}

export default App;
