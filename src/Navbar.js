import React, { useEffect } from 'react';
import "./Navbar.css";

function Navbar() {

    useEffect(() => {
        const nav = document.querySelector(".navbar");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                nav.classList.add("navbar-black");
            }
            if (window.scrollY < 100) {
                nav.classList.remove("navbar-black");
                nav.classList.add("navbar");
            }
        });
    }, []);


    return (
        <div className="navbar">
            {/* <div className={`navbar ${show && "nav-black"}`}> */}
            <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <img className="navbar-avatar" src="https://i.pinimg.com/564x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg" alt="User Logo" />
        </div>
    )
}

export default Navbar;
