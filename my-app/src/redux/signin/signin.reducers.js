import {  SIGNIN_Error, SIGNIN_Failed, SIGNIN_loading, SIGNIN_Success, SIGNOUT,  } from "./signin.types"

const InitialValue = {
    isAuth:false,
    loading: false,
    error: false,
    email:"",
    
}

export const SigninReducer = (state = InitialValue, { type, payload }) => {
    switch (type) {
        case SIGNIN_loading: {
            return {
                ...state,
                loading: true,
                }
        }
        case SIGNIN_Success: {
            return {
                ...state,
                loading: false,
                isAuth:true,
                email: payload
            }
        }
        case SIGNIN_Error: {
            return {
                ...state,
                loading: false,
                error: true,
            }

        }
        case SIGNIN_Failed:{
            return {...state, loading: false}
        }
        case SIGNOUT:{
          return {...InitialValue} 
        }
        default: {
            return state
        }
    }
}