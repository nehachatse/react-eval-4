import React from "react";
import styles from "./AdminLogin.module.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import AdminView from "./AdminView";
import { Link } from "@mui/material";
import { useHistory} from "react-router-dom";

export default function AdminLogin() {
    const [userName, setName] = React.useState("");
    const [pass, setPass] = React.useState("");
    const history = useHistory();

    const {isAuth, handleIsAuth} = React.useContext(AuthContext);

    const handleSubmit = (e) => {
        if(userName == "" || pass == ""){
            alert("All fields are required!!");
            return;
        }
        e.preventDefault();
        handleIsAuth({userName, pass});
        setName("");
        setPass("");
    }

    const handleGoBack = () => {
        history.replace("/");
    }

    return isAuth? ( 
    <><AdminView/></>
    )
    :(
        <div style={{width:"60%", margin:"30px auto", justifyContent:"center"}}>
        <form>
            <div className={styles.formDiv1}>
                <div><input type="text" placeholder="Username" value={userName} onChange={(e) => setName(e.target.value)} /></div>
                <div><input type="text" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} /></div>
                <button onClick={handleSubmit}>SUBMIT</button>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </form>
        </div>
    )
}