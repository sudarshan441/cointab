import { SIGNUP_Error, SIGNUP_loading, SIGNUP_Success } from "./signup.types"

const InitialValue = {
    loading: false,
    error: false,
    signup_success:false,
}

export const SignupReducer = (state = InitialValue, { type, payload }) => {
    switch (type) {
        case SIGNUP_loading: {
            return {
                ...state,
                loading: true,
                
            }
        }
        case SIGNUP_Success: {
            return {
                ...state,
                loading: false,
                signup_sucess:true,
            }
        }
        case SIGNUP_Error: {
            return {
                ...state,
                loading: false,
                error: true,
            }

        }
        default: {
            return state
        }
    }
}