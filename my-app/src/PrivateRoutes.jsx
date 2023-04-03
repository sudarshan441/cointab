import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function PrivateRoutes({children}){

const {isAuth}=useSelector(store=>store.signin)
    if(!isAuth){
     return <Navigate to="/login"></Navigate>
    }
    return children
}