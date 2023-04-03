import { Box, Button } from "@chakra-ui/react";
import styles from "../Navbar.module.css"
import { NavLink } from "react-router-dom";


export default function NavBar() {
    const link=[{path:"/",title:"Home"},{path:"/login",title:"Login"},{path:"/signup",title:"Sign up"}]  
    return(
        <Box padding={"20px"} backgroundColor={"grey"} display={"flex"} justifyContent="space-around">
        {link.map(item=><NavLink color="white" key={item.title} className={({isActive})=>{
                return isActive?styles.active:styles.default
            }} to={item.path} end>{item.title}</NavLink>)}
         </Box>
      
    )
}