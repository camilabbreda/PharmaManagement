import { Link } from "react-router-dom"
import { useState } from "react"
import { Butao, FormMedicineContent, HeaderNewMedicine } from "../Components/Style"

export default function NewMedicine() {
    
    const [newMedicine, setNewMedicine] = useState({
        name: "",
        lab: "",
        dose: "",
        category: "",
        price: "",
        details: ""
    })

    function CreateNewMedicine(e) {
        e.preventDefault()
        fetch("http://localhost:3001/medicamentos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMedicine)
        })
        ClearForm()
        window.alert("Medicamento Cadastrado com Sucesso!")
    }

    function ClearForm() {
        setNewMedicine({
            name: "",
            lab: "",
            dose: "",
            category: "",
            price: "",
            details: ""
        })
    }

    return (
        <>
            <HeaderNewMedicine>
                <Link type="submit" className="btn btn-outline-success" to="/medicamentos">Lista de Medicamentos</Link>
            </HeaderNewMedicine>
            <div style={{ margin: "40px" }}>
                <h4 style={{ color: "green" }}>
                    Cadastro de Medicamento
                </h4>
                <FormMedicineContent>
                    <form className="row g-3" onSubmit={CreateNewMedicine} onReset={ClearForm}>
                        <div className="col-md-6">
                            <label className="form-label">Medicamento*</label>
                            <input type="text" required className="form-control" value={newMedicine.name} onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Laboratório*</label>
                            <input type="text" required className="form-control" value={newMedicine.lab} onChange={(e) => setNewMedicine({ ...newMedicine, lab: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Dosagem*</label>
                            <input type="text" required className="form-control" value={newMedicine.dose} onChange={(e) => setNewMedicine({ ...newMedicine, dose: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label className="form-label col-12">Tipo*</label>
                            <select id="inputState" required className="form-select " value={newMedicine.category} onChange={(e) => setNewMedicine({ ...newMedicine, category: e.target.value })}>
                                <option value="">Selecionar...</option>
                                <option value="Medicamento Controlado">Medicamento Controlado</option>
                                <option value="Medicamento Comum">Medicamento Comum</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Preço Unitário*</label>
                            <input type="text" required className="form-control" value={newMedicine.price} onChange={(e) => setNewMedicine({ ...newMedicine, price: e.target.value })} />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Descrição</label>
                            <textarea className="form-control" maxLength={300} style={{ height: "100px" }} value={newMedicine.details} onChange={(e) => setNewMedicine({ ...newMedicine, details: e.target.value })}></textarea>
                        </div>
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <Butao type="reset" className="btn btn-success" >Limpar</Butao>
                            <button type="submit" className="btn btn-success" style={{ width: "120px" }}>Salvar</button>
                        </div>
                    </form>
                </FormMedicineContent>
            </div>
        </>
    )
}