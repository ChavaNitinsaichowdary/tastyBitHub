import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
  const onlineStatus = useOnlineStatus();
   const [button, setButton] = useState('Login');
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className='logoContainer'>
          <img src={LOGO_URL} className="w-24" alt="logo" />
      </div>
      <div className='flex items-center'>
        <ul className="flex p-1 m-4">
          <li className="p-4">Online Status : {onlineStatus ? "✅":"🔴"}</li>
          <li className="p-4"><Link to='/about'>About Us</Link></li>
          <li className="p-4"><Link to='/'>Home</Link></li>
          <li className="p-4"><Link to='/contact'>Contact Us</Link></li>
          <li className="p-4"><Link to='/grocery'>Grocery</Link></li>
          <li className="p-4">Cart</li>
          <button className="bg-green-100 px-4 py-0" onClick={()=>{
            button==='Login'? setButton('Logout') : setButton('Login');
          }}>{button}</button>
        </ul>
      </div>
      </div>
    );
  }
  export default Header;