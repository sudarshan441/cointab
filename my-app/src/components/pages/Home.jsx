import { useDispatch, useSelector } from "react-redux"
import {Flex,Spacer, Button ,Heading,Container} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/signin/signin.actions";

export default function Home(){
    const {email,isAuth}=useSelector(store=>store.signin)
    const navigate=useNavigate();
    const dispatch=useDispatch();  
    if(!isAuth){
     navigate("/login")
    }
    const handleLogout=()=>{
      dispatch(signOut())
    }
    return(
    <Container marginTop={"20px"} maxW='container.lg'>
    <Flex>
   <Heading>{email}</Heading>
    <Spacer />
    <Button onClick={handleLogout}>logout</Button>
   </Flex>
    </Container>  
      
    )
 
 }
