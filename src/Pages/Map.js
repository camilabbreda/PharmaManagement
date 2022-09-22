
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useState, useEffect } from "react"

export default function Map() {
    const [pharmacyMap, setPharmacyMap] = useState()

    useEffect(() => {
        getPharmacy()
    }, [])

    function getPharmacy() {
        fetch("http://localhost:3001/farmacias")
            .then((response) => response.json())
            .then((data) => {
                setPharmacyMap(data);
            })
    }

    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <h4 style={{ color: "green", marginLeft: "100px" }}>
                    Localização das Farmácias
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <MapContainer
                        center={[-20.3518222, -40.3066376]}
                        zoom={10}
                        scrollWheelZoom={true}
                        style={{ height: "500px", width: "1350px" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {pharmacyMap !== undefined ? (pharmacyMap.map((pharmacy) => (
                            <Marker position={[pharmacy.latitude, pharmacy.longitude]}>
                                <Popup>
                                    <h3>{pharmacy.nomeFantasia}</h3>
                                    <h3>{pharmacy.razaoSocial}</h3>
                                    <p style={{ margin: "0" }}>{pharmacy.cnpj}</p>
                                    <p style={{ margin: "0" }}>{pharmacy.email}</p>
                                    <p style={{ margin: "0" }}>{pharmacy.celular}</p>
                                    <p style={{ margin: "0" }}>{pharmacy.cep}</p>
                                    <p style={{ margin: "0" }}>{pharmacy.logradouro},{pharmacy.numero}</p>
                                    <p style={{ margin: "0" }}>{pharmacy.bairro}</p>
                                    <p style={{ margin: "0" }}>{pharmacy.cidade}/{pharmacy.estado}</p>
                                </Popup>
                            </Marker>))) : ((<div>Carregando...</div>))}
                    </MapContainer>
                </div>
            </div>
        </>
    )
}