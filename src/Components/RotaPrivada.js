import { Outlet, Navigate } from "react-router-dom"
import { useLogin } from "../Contexts/PharmacyContext"


export default function RotaPrivada(){
    const {isLoggedIn} = useLogin()
   
    return isLoggedIn===true ? <Outlet/> : <Navigate to="/login" replace />
}