import { userConstant } from "./actionType"

const initState = {
    claim: [],
    isLoading: true,
    isError: false
}
export const reducer = (state = initState, action) => {
    console.log("in reducer")
    switch(action.type) {
        case userConstant.GET_CLAIM_REQUEST:{
            return{
                ...state,
                isLoading: true
            }
        }
        case userConstant.GET_CLAIM_SUCCESS: {
            return {
                ...state,
                claim: action.payload,
                isLoading: false
            }
        }

        case userConstant.GET_CLAIM_FAILURE:{
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
    }
}