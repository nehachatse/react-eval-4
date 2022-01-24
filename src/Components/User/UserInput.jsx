import React from "react";
import styles from "./UserInput.module.css";

export default function UserInput({onAdd}){
    const [userName, setName] = React.useState("");
    const [userReason, setReason] = React.useState("");
    const [userAmount, setAmount] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({userName, userReason, userAmount});
        setName("");
        setReason("");
        setAmount(0);
    }
    console.log("Input")
    return (
        <div style={{width:"60%", margin:"30px auto", justifyContent:"center"}}>
        <form>
            <div className={styles.formDiv}>
                <div><input type="text" placeholder="Enter your name" value={userName} onChange={(e) => setName(e.target.value)} required/></div>
                <div><input type="text" placeholder="Purpose of the claim" value={userReason} onChange={(e) => setReason(e.target.value)} required/></div>
                <div><input type="number" placeholder="Enter amount to claim" value={userAmount} onChange={(e) => setAmount(e.target.value)} required/></div>
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
        </form>
        </div>
    )
}