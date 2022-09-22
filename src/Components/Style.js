import styled from "styled-components"
export const ContainerNavBar = styled.div`
display: flex;
flexDirection: row;
padding: 0px;
fontSize:18px; 
justify-content: space-between



`


export const Background=styled.div`
    width: 100%;
    height: 100%;
    padding-top: 0px;
    left: 0;
    right:0;
    top: 0;
    bottom: 0;
    background: rgba(255,255,255,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999
`
export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.3);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    border-radius: 10px;
`
export const ModalImg = styled.img`
    width:100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p{
        margin-bottom: 1rem;
        width:300px;
        textAlign: center;
    }

    button{
        padding: 10px 24px;
        background: #198754;
        border-radius: 6px;
        width: 150px;
        color: #fff;
        border: none;
        line-height: 1.3;
    }

    bottom{
        margin-top:150px;
        margin-bottom: 0px;
    }
`
export const DeleteButton = styled.button`
    cursor: pointer;
    display: flex;
    position: relative;
    color:#198754; 
    background: rgba(255,255,255,0);
    left: 240px;

    width: 150px;
    border: none;

    padding: 0;
    z-index: 9999;
`
export const HeaderSearch = styled.div`
margin-top: 50px; 
margin-right: 50px; 
margin-left: 50px; 
text-align: right; 
flex-direction: row; 
display: flex
`
export const ConteainerMedicineList = styled.div`
margin: 50px; 
display: flex; 
position: relative; 
box-sizing: border-box; 
flex-wrap: wrap 
`
export const CardMedicineList = styled.div`
width: 18rem;
margin-left: 80px;
margin-right: 80px;
margin-bottom: 80px
`
export const HeaderNewMedicine = styled.div`
margin-top: 40px; 
margin-right: 100px; 
text-align: right 
`
export const FormMedicineContent = styled.div`
border: solid 1px rgb(135, 167, 155); 
padding-right: 25px; 
padding-left: 25px; 
padding-bottom: 50px; 
padding-top: 40px; 
border-radius: 20px
`
export const Butao = styled.button`
margin-right: 100px; 
width: 120px;
margin-bottom:2px
`
export const FormPharmContent = styled.div`
border: solid 1px rgb(135, 167, 155); 
padding-right: 25px; 
padding-left: 25px; 
padding-bottom: 20px; 
padding-top: 40px; 
border-radius: 20px 
`


