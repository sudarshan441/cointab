import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoutes from "../PrivateRoutes";
import SignUp from "./pages/SignUP";

export default function AllRoutes() {
    return(
        <Routes>
            <Route path="/" element={<PrivateRoutes><Home></Home></PrivateRoutes>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
    )
}