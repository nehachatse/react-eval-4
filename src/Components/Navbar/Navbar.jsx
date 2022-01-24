import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({title}){

    console.log("Navbar")
    return (
        <div className={styles.navbar}>
            <Link to="/admin"><button>{title}</button></Link>
        </div>
    )
}