import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import CreateFlask from "./components/CreateFlask";

function Navbar() {
    const activeLinkClasses = 'bg-yellow-300';

    return (
        <Router>
            <nav className="bg-red">
                <ul className="flex bg-red-300 justify-between">
                    <li>
                        <NavLink className={({isActive}) => isActive ?  activeLinkClasses : ''} to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ?  activeLinkClasses : ''} to="/">New</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ?  activeLinkClasses : ''} to="/all">View All</NavLink>
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