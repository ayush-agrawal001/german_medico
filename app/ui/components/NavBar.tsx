'use client'

import "@/app/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function NavBar(){

    const [isToggled, setIsToggled] = useState(false);
    
    const toggleSwitch = () => {
        setIsToggled(!isToggled);
      };
    
    return( 
    <div>
        <div className="topMost">

     <nav className="navbar">
        <div className="search-bar">
            <input type="text" placeholder="Suchen" />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.44 1.601a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
                </svg>
            </button>
        </div>
        <ul className="navbar-links">
            <li><div className="leaf_active"></div><a href="#">Rezept einlösen</a></li>
            <li><div className="leaf_non_active"></div><a href="#">Live Bestand</a></li>
            <li><div className="leaf_non_active"></div><a href="#">Videosprechstunde</a></li>
            <li><div className="leaf_non_active"></div><a href="#">FAQs</a></li>
            <li><div className="leaf_non_active"></div><a href="#">Kontakt</a></li>
        </ul>
        <div className="navbar-icons">
            <a href="#" className="cart-icon-container">
                <FontAwesomeIcon className="cartIcon" icon={faCartShopping} />
                <span className="cart-count">1</span>
            </a>
            <a href="#" className="login-button">Anmelden</a>
        </div>
    </nav>
        </div>
        <div className="sec_top">
            <div className="breadcrumb">
                <a href="#">Home </a> &rarr; 
                <a href="#"> Livebestand </a> &rarr; 
                <span> Cannabis Blüten </span>
            </div>
            <div className="side_">
                <p>GKV mit Kostenübernahme?</p>
                <button>Preisoptionen</button>
            </div>        
        </div>

        <div className="thi_top">

    <div className="page-title">
        <Image className="icon" src="/image01.png" width={20} height={20} alt="logo"/> 
        <h1>Blüten</h1>
    </div>

    <div className="content-toolbar">
        <div className="search-bar">
            <input type="text" placeholder="Suchen" />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.44 1.601a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
                </svg>
            </button>
        </div>
            
            
        <div className="sort-filter">
           
            <button className="sort-dropdown">Sortieren nach</button>
           
            <span className="availability-toggle">
                <div className={`toggle-switch ${isToggled ? 'toggled' : ''}`} onClick={toggleSwitch}>
                    <span className="toggle-text">Verfügbarkeit</span>
                    <div className="toggle-slider">
                        <div className="toggle-knob"></div>
                    </div>
                </div>
            </span>

            <button className="view-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
        </div>
    </div>
        </div>

    </div>
    )
}