import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Navbar() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/all">All</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/all" element={<About/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    )
}

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  } 

export default Navbar;