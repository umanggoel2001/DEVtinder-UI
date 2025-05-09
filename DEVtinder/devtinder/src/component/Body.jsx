import React from 'react'
import NavBar from './NavBar'
import { Outlet } from "react-router-dom";
import Footer from './Footer';
const Body = () => {
  return (
    <div>

        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Body