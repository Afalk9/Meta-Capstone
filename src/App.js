
import './App.css';
import { Header } from './header';
import {Nav} from './Nav';
import {Main} from './Main';
import {Footer} from './Footer';
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Reservations from "./Pages/Reservations";
import Login from "./Pages/Login"
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <>
  <Header/>
  <Nav/>
  
  <Footer/>
  </>
    )
}

export default App;
