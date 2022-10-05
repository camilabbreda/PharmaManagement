import { Butao, FormPharmContent } from "../Components/Style"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
const ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAPBOX}`;

export default function NewPharmacy() {

    const [newPharmacy, setNewPharmacy] = useState({
        razaoSocial: "",
        cnpj: "",
        nomeFantasia: "",
        email: "",
        telefone: "",
        celular: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        complemento: "",
        latitude: "",
        longitude: ""
    })

    // function HandleGenerateData(e) {
    //     e.preventDefault();
    //     fetch(
    //         `https://api.mapbox.com/geocoding/v5/mapbox.places/${newPharmacy.logradouro}.json?${ACCESS_TOKEN_MAP_BOX}`
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log({ data })
    //             const [long, lat] = data.features[0].center;
    //             setNewPharmacy((prev) => ({
    //                 ...prev,
    //                 latitude: lat,
    //                 longitude: long,
    //             }));
    //         });
    // }

    // Dessa forma não é necessário ter um botão para gerar os dados de localização
    useEffect(() => {
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${newPharmacy.logradouro}.json?${ACCESS_TOKEN_MAP_BOX}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log({ data })
                const [long, lat] = data.features[0].center;
                setNewPharmacy((prev) => ({
                    ...prev,
                    latitude: lat,
                    longitude: long,
                }));
            });
    }, [newPharmacy.logradouro]);


    function CreateNewPharmacy(e) {
        e.preventDefault()
        fetch("http://localhost:3001/farmacias", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPharmacy)
        })

        ClearForm()
        window.alert("Farmácia Cadastrada com Sucesso!")
    }

    useEffect(() => {
        if (newPharmacy.cep.length === 9) {
            fetch(`https://viacep.com.br/ws/${newPharmacy.cep}/json/`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setNewPharmacy({ ...newPharmacy, logradouro: data.logradouro, bairro: data.bairro, cidade: data.localidade, estado: data.uf });
                });
        }
    }, [newPharmacy.cep]);

    function ClearForm() {
        setNewPharmacy({
            razaoSocial: "",
            cnpj: "",
            nomeFantasia: "",
            email: "",
            telefone: "",
            celular: "",
            cep: "",
            logradouro: "",
            numero: "",
            bairro: "",
            cidade: "",
            estado: "",
            complemento: "",
            latitude: "",
            longitude: ""
        })
    }

    return (
        <>
            <div style={{ marginTop: "40px", marginRight: "100px", marginBottom: "0", textAlign: "right" }}>
                <Link type="submit" className="btn btn-outline-success" to="/farmacias">Lista de Farmácias</Link>
            </div>
            <div style={{ marginRight: "40px", marginLeft: "40px" }}>
                <h4 style={{ color: "green" }}>
                    Cadastro de Farmácia
                </h4>
                <FormPharmContent>
                    <form className="row g-3" onSubmit={CreateNewPharmacy} onReset={ClearForm}>
                        <div className="col-md-4">
                            <label className="form-label">Razão Social*</label>
                            <input type="text" required className="form-control" value={newPharmacy.razaoSocial} onChange={(e) => setNewPharmacy({ ...newPharmacy, razaoSocial: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">CNPJ*</label>
                            <input type="text" required className="form-control" value={newPharmacy.cnpj} onChange={(e) => setNewPharmacy({ ...newPharmacy, cnpj: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Nome Fantasia*</label>
                            <input type="text" required className="form-control" value={newPharmacy.nomeFantasia} onChange={(e) => setNewPharmacy({ ...newPharmacy, nomeFantasia: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">E-mail*</label>
                            <input type="email" required className="form-control" value={newPharmacy.email} onChange={(e) => setNewPharmacy({ ...newPharmacy, email: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Telefone</label>
                            <input type="text" className="form-control" value={newPharmacy.telefone} onChange={(e) => setNewPharmacy({ ...newPharmacy, telefone: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Celular*</label>
                            <input type="text" required className="form-control" value={newPharmacy.celular} onChange={(e) => setNewPharmacy({ ...newPharmacy, celular: e.target.value })} />
                        </div>
                        <div className="col-2">
                            <label className="form-label">CEP*</label>
                            <input type="text" required className="form-control" value={newPharmacy.cep} onChange={(e) => setNewPharmacy({ ...newPharmacy, cep: e.target.value })} />
                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Logradouro*</label>
                            <input type="text" required className="form-control" value={newPharmacy.logradouro} onChange={(e) => setNewPharmacy({ ...newPharmacy, logradouro: e.target.value })} />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Número*</label>
                            <input type="text" required className="form-control" value={newPharmacy.numero} onChange={(e) => setNewPharmacy({ ...newPharmacy, numero: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Bairro*</label>
                            <input type="text" required className="form-control" value={newPharmacy.bairro} onChange={(e) => setNewPharmacy({ ...newPharmacy, bairro: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Cidade*</label>
                            <input type="text" required className="form-control" value={newPharmacy.cidade} onChange={(e) => setNewPharmacy({ ...newPharmacy, cidade: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Estado*</label>
                            <input type="text" required className="form-control" value={newPharmacy.estado} onChange={(e) => setNewPharmacy({ ...newPharmacy, estado: e.target.value })} />
                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Complemento</label>
                            <input type="text" className="form-control" value={newPharmacy.complemento} onChange={(e) => setNewPharmacy({ ...newPharmacy, complemento: e.target.value })} />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Latitude*</label>
                            <input type="text" required className="form-control" value={newPharmacy.latitude} onChange={(e) => setNewPharmacy({ ...newPharmacy, latitude: e.target.value })} />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Longitude*</label>
                            <input type="text" required className="form-control" value={newPharmacy.longitude} onChange={(e) => setNewPharmacy({ ...newPharmacy, longitude: e.target.value })} />
                        </div>

                        <div className="col-12" style={{ textAlign: "center" }}>
                            <Butao type="reset" className="btn btn-success" >Limpar</Butao>
                            <Butao type="submit" className="btn btn-success" >Salvar</Butao>
                            {/* <button onClick={HandleGenerateData} className="btn btn-success" style={{ width: "300px" }}>Gerar Dados Geográficos</button> */}
                        </div>
                    </form>
                </FormPharmContent>
            </div>
        </>
    )
}
