import { useState, useEffect } from 'react';
import medicamento  from '../Imagens/medicamento.png'
import { Background, ModalContent, ModalImg, ModalWrapper } from "./Style";
import '../Components/StyleCSS.css'

//Referência:
//Modal Realizado com base neste vídeo: https://www.youtube.com/watch?v=d3aI1Dt0Z50&ab_channel=BrianDesign

export const Modal=({showModal, setShowModal, id, medicine})=>{
    const [medicineList, setMedicineList] = useState()
    
    useEffect(() => {
        getMedicineList()
    }, [])

    function getMedicineList (){
        fetch("http://localhost:3001/medicamentos")
            .then((response) => response.json())
            .then((data) => {
                setMedicineList(data);
            })
    }



medicine = medicineList!==undefined ? medicineList.filter(item=>item.id === id): null



    return(
        <>
        {
        showModal? 
        (<Background>
            <ModalWrapper showModal={showModal} >
                <ModalImg src={medicamento}/>
                <ModalContent>
                    <h1>{medicine[0].name}</h1>
                    <h6> Laboratório: {medicine[0].lab}</h6>
                    <h6> {medicine[0].category}</h6>
                    <h6> Descrição:</h6>
                    <p className='p2' >{medicine[0].details}</p>
                    <h6>Dosagem: {medicine[0].dose}</h6> 
                    <h5> R${medicine[0].price}</h5>
                    <button onClick={()=> setShowModal(prev=>!prev)}>Fechar</button>
                </ModalContent>
            </ModalWrapper>
        </Background> ): null
        }
        </>
    )
}