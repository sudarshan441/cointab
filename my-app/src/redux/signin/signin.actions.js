import { SIGNIN_Error, SIGNIN_Failed, SIGNIN_loading, SIGNIN_Success, SIGNOUT, } from "./signin.types";

export const signIn=(data)=>async(dispatch)=>{
    try{
      dispatch({type:SIGNIN_loading})
        let res=await fetch("https://cointab-1n1f.onrender.com/user/login",{
       method:"POST",
       headers:{
           "Content-Type": "application/json"
       },
       body:JSON.stringify(data)}
   )
    res =await res.json();
    if(res.message=="Too many attempts, please try after 24 hours"){
        dispatch({type:SIGNIN_Failed})
        alert("Too many attempts, please try after 24 hours")
    }else if(res.message=="email not found"){
        dispatch({type:SIGNIN_Failed})
    alert("user does not exist")

    }else if(res.message=="Invalid Credentials"){
        dispatch({type:SIGNIN_Failed})
        alert("Invalid Credentials")
    }else{
        dispatch({type:SIGNIN_Success,payload:res.email});
        alert("login successful")
    }
    }catch(err){
     dispatch({type:SIGNIN_Error})
     alert("Error: " + err)
    }
    
}
export const signOut=()=>{
    return {type:SIGNOUT}
}