import FormDifunto from "../../components/ventas/FormDifunto/FormDifunto"
import NumerosServicios from "../../components/ventas/NumeroServicios/NumerosServicios"

//registar /actualizar venta


export default function ventas() {
    return (
        <>
            <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-evenly'}}> 
                <FormDifunto />
                <NumerosServicios />
            </div>
        </> 
    )
}
