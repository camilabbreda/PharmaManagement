import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
    const navigate = useNavigate()
    const [passwordConfirm, setPasswordConfirm] = useState()
    const [user, setNewUser] = useState({
        username: "",
        userLastName: "",
        userEmail: "",
        userPassword: "",
    })

    function Register(e) {
        e.preventDefault()
        let check = /(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
        if (user.userPassword.match(check)&& passwordConfirm===user.userPassword) {
            alert("usuário cadastrado")
            navigate("/login")
            ClearForm()
        } else if(passwordConfirm!==user.userPassword){
            alert("As Senhas digitadas não são iguais!")
        } else{
            alert("Senha inválida");
        }
    }

    function ClearForm() {
        setNewUser({
            username: "",
            userLastName: "",
            userEmail: "",
            userPassword: "",
        })
        setPasswordConfirm("")
    }


    return (
        <>
            <div className="row " style={{ marginTop: "20px" }} >
                <div style={{ textAlign: "center", color: "#198754", fontSize: "25px" }}>
                    Cadastro de Funcionário:
                </div>
                <div className="col-md-4" ></div>
                <form onSubmit={Register} onReset={ClearForm} className="col-md-4" style={{ border: "solid 1px rgb(135, 167, 155)", paddingRight: "25px", paddingLeft: "25px", paddingBottom: "50px", paddingTop: "40px", borderRadius: "6%" }}>
                    <div className="col-md-12">
                        <label className="form-label">Nome</label>
                        <input type="text" required value={user.username} onChange={(e) => { setNewUser({ ...user, username: e.target.value }) }} className="form-control" placeholder="Digite aqui seu nome..."  style={{ marginBottom: "40px" }} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Sobrenome</label>
                        <input type="text" required value={user.userLastName} onChange={(e) => { setNewUser({ ...user, userLastName: e.target.value }) }} className="form-control" placeholder="Digite aqui seu sobrenome..."  style={{ marginBottom: "40px" }} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Email</label>
                        <input type="email" required value={user.userEmail} onChange={(e) => { setNewUser({ ...user, userEmail: e.target.value }) }} className="form-control" placeholder="Digite aqui seu e-mail..."  style={{ marginBottom: "40px" }} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Senha</label>
                        <input type="password" required value={user.userPassword} onChange={(e) => { setNewUser({ ...user, userPassword: e.target.value }) }} className="form-control" placeholder="Digite aqui sua senha..."  style={{ marginBottom: "0px" }} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Confirmar Senha</label>
                        <input type="password" required value={passwordConfirm} onChange={(e) => { setPasswordConfirm(e.target.value) }} className="form-control" placeholder="Digite aqui sua senha..."  style={{ marginBottom: "0px" }} />
                        <p style={{ fontSize: "12px", marginTop: "0" }}>A senha deve conter no mínimo 8 caracteres com números e letras</p>
                    </div>
                    <button type="submit" className="btn btn-success col-md-12" style={{ marginBottom: "25px" }}>Cadastrar</button>
                    <button type="reset" className="btn btn-outline-success col-md-12" >Limpar</button>
                </form>
                <div className="col-md-5" ></div>
            </div>
        </>
    )

}