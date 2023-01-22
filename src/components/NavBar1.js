import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {CgMenuGridO} from 'react-icons/cg';
import {IoIosCloseCircleOutline} from "react-icons/io";

 function NavBar() {
    const navRef = useRef();
    const showNb = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href=''>Peliculas</a>
            <a href=''>Series</a>
            <a href=''>Streams</a>
            <a href=''></a>
            <button className="nav-btn nav-close-btn" onClick={showNb} >
                <IoIosCloseCircleOutline />
                <FaTimes />
            </button>
        </nav>
        <CgMenuGridO/>
            <FaBars />
        <button onClick={showNb} className="nav-btn">
            <CgMenuGridO/>
            <FaBars />
        </button>
    </header>
    
  );
}

export default NavBar;
