import { FormClientData } from "../../../components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import Layout from "../../../components/LayoutFolder/Layout";


//This is form for new client

export default function crear({idPolize}) {
    console.log(idPolize)
    return (
        <Layout>
            <InputCodigoSeguro data={idPolize}/>
            <FormClientData data={idPolize} />
        </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/clientes/polize')
    const dataPolize = await res.json()
    const idPolize = dataPolize.pop()

    return {
        props: {
            idPolize
        }
    }
}