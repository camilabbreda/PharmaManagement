import { Link } from "react-router-dom"
import apagarPost from "../Imagens/apagarPost.png"
import { useState, useEffect } from "react"
import { HeaderSearch } from "../Components/Style"

export default function PharmacyList() {

    const [pharmacyList, setPharmacyList] = useState()
    const [search, setSearch] = useState()
    const [filtro, setFiltro] = useState()

    useEffect(() => {
        getPharmacy()
    }, [pharmacyList])

    function getPharmacy() {
        fetch("http://localhost:3001/farmacias")
            .then((response) => response.json())
            .then((data) => {
                setPharmacyList(data);
            })
    }

    function HandleDeletePharmacy(id) {
        if (window.confirm("Tem certeza que deseja excluir?")) {
            fetch(`http://localhost:3001/farmacias/${id}`, { method: "DELETE" })
        }
    }

    useEffect(() => {
        if (filtro === undefined) {
            setFiltro(pharmacyList)
        }
        else if (filtro.length > pharmacyList.length) {
            setFiltro(pharmacyList)
        }
    }, [pharmacyList])


    useEffect(() => {
        if (filtro !== undefined) {
            setFiltro(pharmacyList.filter(item => {
                if ((item.razaoSocial.toLocaleLowerCase()).indexOf(search.toLocaleLowerCase()) !== -1) { return item; }
            }))
        } else { setFiltro(pharmacyList) }
    }, [search])

    return (
        <>
            <HeaderSearch>
                <input placeholder="Digite a razão social da farmácia a ser buscada..." value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" style={{ width: "100%", marginRight: "30px" }} />
                <Link type="submit" className="btn btn-outline-success" style={{ width: "200px" }} to="/novafamacia">Nova Farmácia</Link>
            </HeaderSearch>
            <div style={{ margin: "40px" }}>
                <h4 style={{ color: "green" }}>
                    Lista de Farmácias
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Cód</th>
                            <th scope="col">Razão Social</th>
                            <th scope="col">CNPJ</th>
                            <th scope="col">Nome Fantasia</th>
                            <th scope="col">e-mail</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">CEP</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Logradouro</th>
                            <th scope="col">Número</th>
                            <th scope="col">Complemento</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: "13px" }}>
                        {filtro !== undefined ? (
                            filtro.map((pharmacy) => {
                                return (
                                    <tr>
                                        <th scope="row">{pharmacy.id}</th>
                                        <td>{pharmacy.razaoSocial}</td>
                                        <td>{pharmacy.cnpj}</td>
                                        <td>{pharmacy.nomeFantasia}</td>
                                        <td>{pharmacy.email}</td>
                                        <td>{pharmacy.telefone}</td>
                                        <td>{pharmacy.celular}</td>
                                        <td>{pharmacy.cidade}</td>
                                        <td>{pharmacy.estado}</td>
                                        <td>{pharmacy.cep}</td>
                                        <td>{pharmacy.bairro}</td>
                                        <td>{pharmacy.logradouro}</td>
                                        <td>{pharmacy.numero}</td>
                                        <td>{pharmacy.complemento}</td>
                                        <td>
                                            <div>
                                                <button style={{ border: "none", backgroundColor: "white" }} key={pharmacy.id} onClick={() => HandleDeletePharmacy(pharmacy.id)}>
                                                    <img src={apagarPost} style={{ width: "22px" }} alt="" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })) : ((<div>Loading...</div>))}
                    </tbody>
                </table>
            </div>
        </>
    )
}