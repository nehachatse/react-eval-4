import React from "react";
import styles from "./AdminLogin.module.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import AdminView from "./AdminView";

export default function AdminLogin() {
    const [userName, setName] = React.useState("");
    const [pass, setPass] = React.useState("");

    const {isAuth, handleIsAuth} = React.useContext(AuthContext);

    const handleSubmit = (e) => {
        console.log("in")
        e.preventDefault();
        handleIsAuth({userName, pass});
        setName("");
        setPass("");
    }

    return isAuth? ( 
    <><AdminView/></>
    )
    :(
        <div style={{width:"60%", margin:"30px auto", justifyContent:"center"}}>
        <form>
            <div className={styles.formDiv1}>
                <div><input type="text" placeholder="Username" value={userName} onChange={(e) => setName(e.target.value)} required/></div>
                <div><input type="text" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required/></div>
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
        </form>
        </div>
    )
}