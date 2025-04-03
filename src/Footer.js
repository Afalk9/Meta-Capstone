 
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Reservations from "./Pages/Reservations";
import Login from "./Pages/Login"
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


 export function Footer() {
    return (
      <div className="nav">
       
            <BrowserRouter>
                <nav-footer>
                  <ul>
                    <li><Link to="/" className="nav-item"> Home </Link></li>
                    <li><Link to="/About" className="nav-item">About</Link></li>
                    <li><Link to="/Menu" className="nav-item">Menu</Link></li>
                    <li><Link to="/Order" className="nav-item">Order</Link></li>
                    <li><Link to="/Reservations" className="nav-item">Reservations</Link></li>
                    <li><Link to="/Login" className="nav-item">Login</Link></li>
                    </ul>
                </nav-footer>
            
            <Routes> 
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Menu" element={<Menu/>}></Route>
                <Route path="/Order" element={<Order/>}></Route>
                <Route path="/Reservations" element={<Reservations/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
           
            </Routes>
            </BrowserRouter>
        </div>
    )
}
