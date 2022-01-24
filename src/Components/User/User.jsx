import React from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import UserInput from "./UserInput";
import UserData from "./UserData";
import styles from "./User.module.css"

export default function User(){
    const [data, setData] = React.useState([]);
    console.log("user")
    
    const getData = async () => {
        axios.get("http://localhost:3000/reimbursement")
        .then(res => {
            console.log("res=",res)
            setData(res.data)})
        .catch(err => console.log(err));
            
    }

    const handleSubmit = async ({userName, userReason, userAmount}) => {
        const data = {
            id: uuid(),
            name: userName,
            date: Date.now(),
            reason: userReason,
            amount: userAmount,
            status: false
        }
        await axios.post("http://localhost:3000/reimbursement", data)
        .then(res => getData())
        .catch(err => console.log(err));

    }

    React.useEffect(() => {
        getData();
    },[])
    
    return (
        <>
            <UserInput onAdd={handleSubmit}/>
            <div className={styles.tables}>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Purpose of Claim</th>
                    <th>Amount</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {
                        data?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.reason}</td>
                                <td>{item.amount}</td>
                                <td>{`${item.status}`}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
            {/* {
                data?.map((item) => <UserData key={item.id} data={item}/>)
            } */}
        
        </>
        
    )
}