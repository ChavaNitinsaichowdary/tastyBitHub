import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{
   const [button, setButton] = useState('Login');
    return (
      <div className="header">
      <div className='logoContainer'>
          <img src={LOGO_URL} className="logo" alt="logo" />
      </div>
      <div className='navContainer'>
        <ul>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-button" onClick={()=>{
            button==='Login'? setButton('Logout') : setButton('Login');
          }}>{button}</button>
        </ul>
      </div>
      </div>
    );
  }
  export default Header;