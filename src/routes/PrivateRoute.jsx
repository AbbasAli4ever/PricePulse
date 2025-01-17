import {Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";



const PrivateRoute = () => {
    let {user} = useContext(AuthContext)
    return (!user ? <Navigate to="/login"/> : <Outlet/>);
}

export default PrivateRoute;