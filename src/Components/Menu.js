import { Link, useNavigate } from "react-router-dom";
import { ContainerNavBar } from "./Style";
import logomarca from "../Imagens/logomarca.png"
import '../Components/StyleCSS.css'

export default function Menu() {

    const navigate = useNavigate()

    return (
        <>
            <ContainerNavBar className="bg-success fs-12"  >
                <nav className="mainNavBar">
                    <div className="col-9 bg-success fs-12" id="divNav" >
                        <Link className="navBar" to="/mapa">Mapa</Link>
                        <Link className="navBar" to="/farmacias">Farmácias</Link>
                        <Link className="navBar" to="/medicamentos">Medicamentos</Link>
                    </div>
                </nav>
                <div onClick={()=>{navigate("/mapa")}}>
                    <img className="logNav" src={logomarca} />
                </div>

            </ContainerNavBar>
        </>
        )
}