import { Routes, Route, Navigate } from "react-router-dom";
import NewPharmacy from "../Pages/NewPharmacy";
import PharmacyList from "../Pages/PharmacyList";
import PrintMedicineList from "../Pages/MedicineList";
import NewMedicine from "../Pages/NewMedicine"
import Map from "../Pages/Map"
import Login from "../Pages/Login"
import { LoginProvider } from "../Contexts/PharmacyContext";
import NotFound from "../Pages/NotFound";
import RotaPrivada from "../Components/RotaPrivada";
import UserRegister from "../Pages/UserRegister";
import Menu from "../Components/Menu";





export default function Rotas() {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/login" element={<LoginProvider> <Login /> </LoginProvider>} />
                <Route element={<LoginProvider> <RotaPrivada /> </LoginProvider>}>
                    <Route path="/" element={<Map />} />
                    <Route path="/mapa" element={<Navigate replace to="/" />} />
                    <Route path="/novafamacia" element={<NewPharmacy />} />
                    <Route path="/farmacias" element={<PharmacyList />} />
                    <Route path="/medicamentos" element={<PrintMedicineList />} />
                    <Route path="/novomedicamento" element={<NewMedicine />} />
                </Route>
                <Route path="/novousuario" element={<UserRegister />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}