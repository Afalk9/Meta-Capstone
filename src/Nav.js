
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Reservations from "./Pages/Reservations";
import Login from "./Pages/Login"
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


export function Nav(){
    return(
        <div className="nav">
       
            <BrowserRouter>
                <nav>
                    <Link to="/" className="nav-item"> Home </Link>
                    <Link to="/About" className="nav-item">About</Link>
                    <Link to="/Menu" className="nav-item">Menu</Link>
                    <Link to="/Order" className="nav-item">Order</Link>
                    <Link to="/Reservations" className="nav-item">Reservations</Link>
                    <Link to="/Login" className="nav-item">Login</Link>
                </nav>
            
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
