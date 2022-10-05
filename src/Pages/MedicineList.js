import { CardMedicineList, ConteainerMedicineList, HeaderSearch } from "../Components/Style"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Modal } from "../Components/Modal"
import medicamento from '../Imagens/medicamento.png'

export default function PrintMedicineList() {

    const [showModal, setShowModal] = useState(false)
    // lembre-se de inicializar as variáveis
    const [medicineList, setMedicineList] = useState([])
    const [search, setSearch] = useState("")
    // eu mudaria essa variável para medicineListeFiltered, assim ficaria mais claro do que se trata
    const [filtro, setFiltro] = useState([])
    const [id, setId] = useState()
    const [loading, setLoading] = useState(true)

    function openModal(id) {
        setShowModal(prev => !prev)
        setId(id)
    }

    // sobre o modal
    // você poderia fazer o filtro aqui mesmo, assim não precisaria bater na API novamente dentro do modal - bater na API só em último caso
    const medicine = medicineList.filter(item => item.id === id)


    // esse useEffect só deve ser chamado na primeira vez que a tela é carregada, senão fica num looping infinito e vc bate no servidor a cada renderização
    // em produção (vida real) isso poderia causar perdas financeiras muito grandes
    useEffect(() => {
        getMedicineList()
    }, [])

    function getMedicineList() {
        fetch("http://localhost:3001/medicamentos")
            .then((response) => response.json())
            .then((data) => { 
                setMedicineList(data);
                // coloquei isso para sua aplicação inicializar com todos os medicamentos
                setFiltro(data)
                setLoading(false)
            })
    }

    function DeleteMedicine(id) {
        if (window.confirm("Tem certeza que deseja excluir?")) {
            fetch(`http://localhost:3001/medicamentos/${id}`, { method: "DELETE" })
            // é necessário atualizar a lista de medicamentos
            .then(() => { getMedicineList()})
            setSearch("")
        }
    }

    // useEffect(() => {
    //     if (filtro === undefined) {
    //         setFiltro(medicineList)
    //     }
    //     else if (filtro.length > medicineList.length) {
    //         setFiltro(medicineList)
    //     }
    // }, [medicineList])


    // useEffect(() => {
    //     if (filtro !== undefined) {
    //         setFiltro(medicineList.filter(item => {
    //             if ((item.name.toLocaleLowerCase()).indexOf(search.toLocaleLowerCase()) !== -1) 
    //             { return item; }
    //         return null    
    //         }))
    //     } else { setFiltro(medicineList) }
    // }, [search])

    useEffect(() => {
        // como inicializamos as variáveis, search nunca será undefinded, e se for "", o indexOf vai retornar -1
        const result = medicineList.filter(item => (item.name.toLocaleLowerCase()).indexOf(search.toLocaleLowerCase()) !== -1)
        setFiltro(result)
    }, [search])

    return (
        <>
            <HeaderSearch>
                <input placeholder="Digite o nome do medicamento a ser buscado..." type="text" className="form-control" style={{ width: "100%", marginRight: "30px" }} value={search} onChange={(e) => setSearch(e.target.value)} />
                <Link type="submit" className="btn btn-outline-success" style={{width:"200px"}} to="/novomedicamento">Novo Medicamento</Link>
            </HeaderSearch>
            <ConteainerMedicineList >
                {/* Para o carregamento antes dos dados voltarem da API á tratamentos melhores, usando loading - você pode pesquisar a respeito */}
                {/* como inicializamos a variável, filtro nunca será undefined, mas seu tamanho poderá ser [] se nada for encontrado */}
                { 
                loading === true ? (<div>Carregando...</div>) :
                filtro.length <= 0 ? (<div>Nenhum medicamento encontrado...</div>) : 
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
                    })
                }
                <Modal showModal={showModal} setShowModal={setShowModal} medicine={medicine} />
            </ConteainerMedicineList>
        </>
    )
}
