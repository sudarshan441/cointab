import { Box,Container, Button, Input ,FormControl, Heading,Select} from "@chakra-ui/react";
import { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import {useNavigate,Navigate } from "react-router-dom";
import { signUp } from "../../redux/signup/signup.actions";

const initialState ={
    email:"",
    password:""
}
export default function SignUp(){
    const [form,setForm]=useState(initialState);
    const {isAuth}=useSelector(store=>store.signin)
    const {loading}=useSelector(store=>store.signup)
    const {email,password} ={form}
    const dispatch=useDispatch();

   
    
    const handleChange=(e)=>{
    const {name,value} = e.target;
    setForm({...form,[name]:value});
   }
   
   const  handleSubmit=()=>{
    if(!form.email || !form.password){
        alert("fields are empty");
        return
    } 
     dispatch(signUp(form));
     
     }
     if(isAuth){
        return <Navigate to="/"></Navigate>
       }
   return(
    <Box>
    <Container>
    <Heading marginTop={"20px"} marginBottom={"15px"}>Sign up</Heading>
    <FormControl >
    <Input onChange={handleChange}  placeholder="enter email " value={email} name="email"/>
    <Input  marginTop="5px" onChange={handleChange}  placeholder="enter password " value={password}  name="password"/>
    <Button  isLoading={loading}
    loadingText='signing in'
    colorScheme='teal'
    variant='outline'  marginTop="10px" onClick={handleSubmit}>Submit</Button>
    </FormControl>
    </Container>
           
     
        </Box>
   )
}


