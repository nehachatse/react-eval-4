import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./AdminView.module.css";
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AuthContext } from "../../Context/AuthContextProvider";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AdminView(){
    const [claims, setClaims] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [current, SetCurrent] = React.useState(0);
    const [status, setStatus] = React.useState("pending");
    const {setIsAuth} = React.useContext(AuthContext);

    const handleOpen = (id) => {
        SetCurrent(id);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const getClaims = async() => {
        await axios.get("http://localhost:3000/reimbursement")
        .then(res => setClaims(res.data))
        .catch(err => console.log(err))
    }

    const handleUpdate = async () => {
        const statusToggle = {status: status};
        console.log("current=", current)
        await axios.patch( `http://localhost:3000/reimbursement/${current}`, statusToggle)
                .then(res => {
                    handleClose();
                    getClaims();
                })
                .catch(err => console.log(err))
    }
    React.useEffect(() => {
        getClaims();
    }, [])
    return (
        <>
            <Navbar title="Welcome Admin">
                <button onClick={() => setIsAuth(false)}>LOGOUT</button>
            </Navbar>
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
                                <td><button onClick={() => handleOpen(item.id)}>Change Status</button></td>
                            </tr>
                        ))
                    }
                    <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Select the remark for Claim.
                              </Typography>
                              <div><input type="radio" value="reject" onChange={(e) => setStatus(e.target.value)}/>REJECT</div>
                              <div><input type="radio" value="in-progress" onChange={(e) => setStatus(e.target.value)}/>IN-PROGRESS</div>
                              <div><input type="radio" value="settled" onChange={(e) => setStatus(e.target.value)}/>SETTLED</div>
                              <button onClick={handleUpdate}>UPDATE</button>
                            </Box>
                          </Modal>
                </tbody>
            </table>
            </div>
        </>
    )
}