import Layout from "../../../components/LayoutFolder/Layout"
import FormResponsable from "../../../components/ventas/FormResponsable/FormResponsable"
import NumerosServicios from "../../../components/ventas/NumeroServicios/NumerosServicios"



export default function responsable() {
    return (
        <Layout>
            <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-evenly'}}> 
                <FormResponsable />
                <NumerosServicios />
            </div>
        </Layout> 
    )
}
