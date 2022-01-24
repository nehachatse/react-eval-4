import styles from "./Navbar.module.css";

export default function Navbar(){
    console.log("Navbar")
    return (
        <div className={styles.navbar}>
            <button>Admin Login</button>
        </div>
    )
}