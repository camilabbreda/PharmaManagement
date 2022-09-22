import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "../Contexts/PharmacyContext"
import logomarca from "../Imagens/logomarca.png"

export default function Login() {
    const navigate = useNavigate()
    const { setIsLoggedIn } = useLogin()
    const [access, setAccess] = useState([{
        username: "",
        password: ""
    }])

    function Login(e) {
        e.preventDefault()
        let check = /(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
        if (access.password.match(check)) {
            setIsLoggedIn(true)
            navigate("/mapa")

        } else {
            alert("Nome de usuário ou senha inválida");
        }
    }

    return (
        <div className="row " id="loginDivFora">
            <div className="cabecalhoLogin">
                <img src={logomarca} alt="logomarca" style={{height:"100px"}} />
                <h1>Acessar PharmacyManagement:</h1>
            </div>
            <div className="col-md-4" ></div>
            <form onSubmit={Login} className="col-md-4" id="formularioLogin">
                <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input type="email" required value={access.username} onChange={(e) => { setAccess({ ...access, username: e.target.value }) }} className="form-control" placeholder="Digite aqui seu e-mail..." id="inputEmail4" style={{ marginBottom: "40px" }} />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Senha</label>
                    <input type="password" required value={access.password} onChange={(e) => { setAccess({ ...access, password: e.target.value }) }} className="form-control" placeholder="Digite aqui sua senha..." id="inputPassword4" style={{ marginBottom: "0px" }} />
                    <p style={{ fontSize: "12px", marginTop: "0" }}>A senha deve conter no mínimo 8 caracteres com números e letras</p>
                </div>
                <button type="submit" className="btn btn-success col-md-12" style={{ marginBottom: "25px" }}>Entrar</button>
                <button type="button" className="btn btn-outline-success col-md-12" ><Link style={{ color: "inherit", textDecoration: "inherit" }} to="/novousuario"> Cadastrar</Link></button>
            </form>
            <div className="col-md-5" ></div>
        </div>
    )
}