import { useState,useEffect } from "react";
import { LOGO_IMG } from "../utiles/constants";
import { Link } from "react-router-dom";
export const Header = () => {

    // let btnName = "Login"; we use normal variable we cannot change value on UI 
    //useState is a local state for functional components
    //React cannot recommand to use useState in for,if-else,function inside
    //it is top level approach of func. component in always define in top in func. componenet
    //don't define it outside func. components 
    const [btnName,setBtnName] = useState("Login")

    //when do not use dependencies array [] it run every render
    //when we use default dependency array [] its call once when initial render page
    //when we give dependencie array inside pass value like [btnClick] it only run when it value change

    useEffect(() => {
        console.log("Helllo Neeraj");
    } , [])

    return (
        <div className="containerheader">
            <div className="logo-container">
                    <img src={LOGO_IMG}/>
            </div>
            <div className="nav-item">
         {/* anchore tag reload paage but Link is interchange componenet */}
                <ul>
                    <li>
                    <Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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