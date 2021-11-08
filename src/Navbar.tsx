import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateFlask from "./components/CreateFlask";

function Navbar() {
    return (
        <Router>
            <nav className="bg-red">
                <ul className="flex bg-red-300 justify-between">
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/">New</Link>
                    </li>
                    <li>
                        <Link to="/all">View All</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/" element={<CreateFlask/>}/>
                <Route path="/all" element={<AllFlasks/>}/>
            </Routes>
        </Router>
    )
}

function Profile() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function AllFlasks() {
    return (
      <div>
        <h2>View All</h2>
      </div>
    );
  } 

export default Navbar;