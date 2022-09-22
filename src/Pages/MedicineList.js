import { CardMedicineList, ConteainerMedicineList, HeaderSearch } from "../Components/Style"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Modal } from "../Components/Modal"
import medicamento from '../Imagens/medicamento.png'

export default function PrintMedicineList() {

    const [showModal, setShowModal] = useState(false)
    const [medicineList, setMedicineList] = useState()
    const [search, setSearch] = useState()
    const [filtro, setFiltro] = useState()
    const [id, setId] = useState()

    function openModal(id) {
        setShowModal(prev => !prev)
        setId(id)
    }

    useEffect(() => {
        getMedicineList()
    }, [medicineList])


    function getMedicineList() {
        fetch("http://localhost:3001/medicamentos")
            .then((response) => response.json())
            .then((data) => {
                setMedicineList(data);
            })
    }

    function DeleteMedicine(id) {
        if (window.confirm("Tem certeza que deseja excluir?")) {
            fetch(`http://localhost:3001/medicamentos/${id}`, { method: "DELETE" })
            setSearch("")
        }
    }

    useEffect(() => {
        if (filtro === undefined) {
            setFiltro(medicineList)
        }
        else if (filtro.length > medicineList.length) {
            setFiltro(medicineList)
        }
    }, [medicineList])


    useEffect(() => {
        if (filtro !== undefined) {
            setFiltro(medicineList.filter(item => {
                if ((item.name.toLocaleLowerCase()).indexOf(search.toLocaleLowerCase()) !== -1) 
                { return item; }
            return null    
            }))
        } else { setFiltro(medicineList) }
    }, [search])

    return (
        <>
            <HeaderSearch>
                <input placeholder="Digite o nome do medicamento a ser buscado..." type="text" className="form-control" style={{ width: "100%", marginRight: "30px" }} value={search} onChange={(e) => setSearch(e.target.value)} />
                <Link type="submit" className="btn btn-outline-success" style={{width:"200px"}} to="/novomedicamento">Novo Medicamento</Link>
            </HeaderSearch>
            <ConteainerMedicineList >
                {filtro === undefined ? ((<div>Carregando...</div>)) : (
                    filtro.map(medicine => {
                        return (<CardMedicineList >
                            <img src={medicamento} className="card-img-top" alt="Produto" />
                            <div style={{ textAlign: "center" }}>
                                <h5 className="card-title">{medicine.name}</h5>
                                <p className="card-title">{medicine.dose}</p>
                                <p className="card-title">{medicine.lab}</p>
                                <h6 className="card-title">R${medicine.price}</h6>
                            </div>
                            <div>
                                <button className="btn btn-success col-md-12" onClick={() => openModal(medicine.id)}>Mais informações</button>
                                <button className="btn btn-outline-success col-md-12" style={{ marginTop: "12px" }} onClick={() => DeleteMedicine(medicine.id)}>Excluir</button>
                            </div>
                        </CardMedicineList>)
                    }))}
                <Modal showModal={showModal} setShowModal={setShowModal} id={id} medicineList={medicineList} />
            </ConteainerMedicineList>
        </>
    )
}