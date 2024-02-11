import { useState } from "react";
import { LOGO_IMG } from "../utiles/constants";
export const Header = () => {

    // let btnName = "Login"; we use normal variable we cannot change value on UI 

    const [btnName,setBtnName] = useState("Login")

    return (
        <div className="container">
            <div className="logo-container">
                    <img src={LOGO_IMG}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart🛒</li>
                    <button className="btn-login" onClick={() => {btnName ==="Login" ? setBtnName("Logout") : setBtnName("Login")
                     console.log(btnName)
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;