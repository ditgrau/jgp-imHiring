import React from "react";
import './Navbar.css'

export function Navbar() {


    return (
        <>
                <nav>
                    <div className="logo"></div>
                    <div className="menu">
                        <div><a href="">cosas</a></div>
                        <div><a href="">Skills</a></div>
                        <div><a href="">Currículum</a></div>
                        <div><a href="">Github</a></div>
                    </div>
                </nav>
        </>
    )
}