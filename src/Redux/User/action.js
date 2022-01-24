import { userConstant } from "./actionType"

export const addClaim = ({name, date, reason, amount, status}) => {
    return {
        type: userConstant.ADD_CLAIM,
        payload: {
            name,
            date, 
            reason,
            amount,
            status
        }
    }
}

export const getClaimRequest =() => {
    return {
      type: userConstant.GET_CLAIM_REQUEST,
      payload: {
        isLoading: true
      }
    }
  }
  
  export const getClaimSuccess = (todos) => {
    return {
      type: userConstant.GET_CLAIM_SUCCESS,
      payload: {
        todos: todos
      }
    }
  }
  
  export const getClaimFailure = () => {
    return {
      type: userConstant.GET_CLAIM_FAILURE,
      payload: {
        isError: true
      }
    }
  }