import React from "react";
import logo from "./images/logo.png";

const Header = ()=>{
    return(
        <>
            <div className="header">
            <img src={ logo } alt="logo" title="Keep Note" width="60px" height="50px"/>
            <h1>Muzammil Keep Note</h1>
            </div>
        </>
    );
}
export default Header;