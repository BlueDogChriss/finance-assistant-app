import * as React from 'react'
import { useState } from 'react';
import { Link, redirect } from "react-router-dom";
import './Sidebar.css'
import { SidebarData } from "../Static/SidebarData"
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";


export default function Sidebar({toggleSidebar, sidebarOpened}) {
    // let [error,setError]= React.useState(null)
    
    const handleLogout = () => {
        localStorage.clear();
        redirect("/login");
        window.location.reload();
    };

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__container--left">
                        <button className="menu-btn" onClick={toggleSidebar}>
                            {sidebarOpened ? (
                                <CloseIcon className="menu-btn-icon" />
                            ) : (
                                <MenuIcon className="menu-btn-icon" />
                            )}
                        </button>

                        <Link to="/home" className="header-brand">
                            Fiance Assistant App
                        </Link>
                    </div>

                    <button className="logoutBtn" onClick={handleLogout}>
                        <ExitToAppIcon />
                        <span>Logout</span>
                    </button>
                </div>
            </header>
            <ul
                className={sidebarOpened ? "nav-list active" : "nav-list"}
                onClick={toggleSidebar}
            >
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <Link to={item.path} className="nav-link">
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}