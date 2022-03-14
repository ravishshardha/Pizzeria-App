import React, {useState} from 'react';
import Logo from "../assests/pizzaLogo.png";       //Give the icon a name and we use .. to get out of component folder(first dot) and get in assests(second dot)
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'   //this is how to import css 
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Home.css'

//To use images, we import them and extract them 

const Navbar = () => {
    const [openLinks,setOpenLinks] = useState(false)

    const toggleNavbar = () =>  {
        setOpenLinks(!openLinks)
    }

    return (  
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo}></img>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="contact">Contact</Link>
                <button onClick = {toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}
 
export default Navbar;