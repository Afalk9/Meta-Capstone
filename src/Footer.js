 
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
      <footer className="footer">
        <h5 className="address">
          Address: 500 Main street
          Chicago IL  45555
         </h5>
        <h5>
        Phone: <a href="tel:555555555">555-555-5555</a>
        Email: <a href="mailto:littlelemon@fake.com">Littlelemon@fake.com</a>
        </h5>
        </footer>
    )
}
