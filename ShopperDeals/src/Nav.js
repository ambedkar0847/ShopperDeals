import React from "react"
import { Link } from "react-router-dom";

function Nav(){

    return(

	<nav className="navbar">
		<Link to="/">Login </Link>
		<Link to="/home">Home</Link>
		<Link to="/contactus">Contact Us </Link>
		<Link to="/deal">Today's Deal</Link>	
		<Link to="/login">Login</Link>
		<Link to="/signup">SignUp</Link>
		<Link to="/additem">Add Item</Link>
		<Link to="/signout">SingOut</Link>
	</nav> 	

    );

        
    
}

export default Nav;

