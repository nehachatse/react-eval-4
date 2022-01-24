import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./AdminView.module.css";
import axios from "axios";

export default function AdminView(){
    const [claims, setClaims] = React.useState([]);

    const getClaims = async() => {
        await axios.get("http://localhost:3000/reimbursement")
        .then(res => setClaims(res.data))
        .catch(err => console.log(err))
    }
    React.useEffect(() => {
        getClaims();
    }, [])
    return (
        <>
            <Navbar title="Welcome Admin"/>
            <div className={styles.tables}>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Purpose of Claim</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Remark</th>
                </thead>
                <tbody>
                    {
                        claims?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.reason}</td>
                                <td>{item.amount}</td>
                                <td>{`${item.status}`}</td>
                                <button>Change Status</button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}