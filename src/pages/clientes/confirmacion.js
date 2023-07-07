import CardRightDatosPagos from "../../components/CardRightDatosPagos/CardRightDatosPagos"
import Layout from "../../components/LayoutFolder/Layout"
import VistaPreviaPago from "../../components/VistaPreviaPago/VistaPreviaPago"

function confirmacion() {
  return (
    <Layout>
      <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-evenly'}}> 
        <VistaPreviaPago />
        <CardRightDatosPagos />
      </div>
    </Layout>
  )
}

export default confirmacion