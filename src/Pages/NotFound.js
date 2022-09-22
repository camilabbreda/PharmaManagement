import { Link } from "react-router-dom";
import {Background, ModalContent} from '../Components/Style'

export default function NotFound(){

    return(
        <Background>
            <ModalContent>
            <h1 style={{color:"#198754", marginBottom:"80px"}}>Pagina não encontrada</h1>
            <Link className="btn btn-success" to="/"> Voltar para Home</Link>
            </ModalContent>
        </Background>
    )
}