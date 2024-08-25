'use client'

import "@/app/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import SortByDropdown from "./miniCompos/DropDown";
import { useAppContext } from "@/app/context/AppContext";

export default function NavBar(){

    const [isToggled, setIsToggled] = useState(false);
    const { state, setState } = useAppContext();

    const searchImage = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.44 1.601a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
</svg>

    const handleSortChange = (option: string) => {
        console.log(`Selected sort option: ${option}`);
      };

    const toggleSwitch = () => {
        setIsToggled(!isToggled);
      };

    const sortOptions = ['Name', 'Date'];
    
    return( 
    <div>
        <div className="topMost">

     <nav className="navbar">
        <div className="search-bar">
            <input type="text" placeholder="Suchen" />
            <button>
                {searchImage}
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
                <span className="cart-count">{state}</span>
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
                
            </button>
        </div>
            
            
        <div className="sort-filter">
           
            <div className="sort-dropdown"><SortByDropdown options={sortOptions} onSortChange={handleSortChange} name= "Sortieren nach" /></div>
           
            <span className="availability-toggle">
                <div className={`toggle-switch ${isToggled ? 'toggled' : ''}`} onClick={toggleSwitch}>
                    <span className="toggle-text">Verfügbarkeit</span>
                    <div className="toggle-slider">
                        <div className="toggle-knob"></div>
                    </div>
                </div>
            </span>

            <button className="view-toggle">
                {searchImage}
            </button>
        </div>
    </div>
        </div>

    </div>
    )
}