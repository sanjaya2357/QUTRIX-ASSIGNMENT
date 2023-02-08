import { Link } from "react-router-dom";
// import { useState } from "react";

const Navbar =()=>{
    
    return (
        <nav>

                  <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt=""  height="60px" width="100px"/>
                  
                 
                   <Link to="/" style={{ textDecoration: 'none' }}><h3>Home</h3></Link> 
                  <Link to="/linechart" style={{ textDecoration: 'none' }}> <h3>Linechart</h3></Link>
                  <Link to="/barchart" style={{ textDecoration: 'none' }}><h3>Barchart</h3></Link>
                  <Link to="/piechart" style={{ textDecoration: 'none' }}><h3>Piechart</h3></Link>
                  
                 
        </nav>
    )
}
export default Navbar;