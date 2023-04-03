
import { SIGNUP_Error, SIGNUP_loading, SIGNUP_Success } from "./signup.types";


export const signUp=(data)=>(dispatch)=>{

      dispatch({type:SIGNUP_loading})
        fetch("https://cointab-1n1f.onrender.com/user/signup",{
       method:"POST",
       headers:{
           "Content-Type": "application/json"
       },
       body:JSON.stringify(data)}
   ).then(res=>res.json()).then(()=>{
    
    dispatch({type:SIGNUP_Success})
    alert("sign up successful")
   
}).catch(()=>{
    dispatch({type:SIGNUP_Error})
    alert("sign up failed")
})
   }