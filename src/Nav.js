
import React, { useState,useEffect } from 'react'
import './Nav.css'
function Nav() {
    const [mouse,setmouse]=useState(false);
    function mousepos(e){
        if(window.scrollY>100){
            setmouse(true);
        }
        else{
            setmouse(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",mousepos);
        return () => {
            window.removeEventListener("scroll",mousepos)
        }
    }, [])
    return (
        <div className={`Nav ${mouse && "nav__black"}`} >
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
            <img className="nav__user" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
        </div>
    )
}

export default Nav
