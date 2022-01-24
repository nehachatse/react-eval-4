import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { getClaimRequest, getClaimSuccess, getClaimFailure } from "../../Redux/User/action";


// function Claim({name, status, date, reason, amount, id, getData}){
//     // const dispatch = useDispatch();

//     // const handleDelete = async (id) => {
    
//     //     await axios.delete(`http://localhost:3000/reimbursement/${id}`);
//     //     getData();
    
//     //   };
    
//       return (
//         <div style={{ display: "flex", padding: "1rem", justifyContent: "center" }}>
//           <div style={{ marginRight: "1rem" }}>{name}</div>
//           <div style={{ marginRight: "1rem" }}>{`${status}`}</div>
          
//         </div>
//       );
// }

export default function UserData({data}){
    console.log("in", data);
    // const {claim, isLoading, isError} = useSelector((state) => {
    //     return {
    //         claim: state.claim,
    //         isLoading: state.isLoading,
    //         isError: state.isError
    //     }
    // } );
    // const dispatch = useDispatch();
    // console.log("===", claim)

    // const getClaims = () => {
    //     const reqAction = getClaimRequest();
    //     dispatch(reqAction);
    
    //     return axios.get("http://localhost:3000/reimbursement")
    //             .then(res => {
    //               dispatch(getClaimSuccess(res));
    //             })
    //             .catch(err => {
    //               dispatch(getClaimFailure())
    //             })
    //   }

    // React.useEffect( () => {
    //     getClaims();
    // }, [])

    // return (
    //     <div>
    //         {isLoading && <h3>Loading.....</h3>}
    //         {isError && <h3>Something's wrong</h3>}
    //         {claim?.map((item) => (
    //             <Claim key={item.id} {...item} />
    //         ))}
    //     </div>
    // )



}