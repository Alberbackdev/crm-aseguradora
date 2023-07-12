import Layout from "../components/LayoutFolder/Layout"
import { getSession } from '@next-auth/react'


export default function Home({session}) {
  return (
    <Layout>
      {/* Poner aqui la estructura HTML que se quiera mostrar en esta pagina */}
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  
  const session = await getSession(context)

  if (!session) {
    redirect: {
      destination: signIn();
      permanent: false
    }
  }

  return {
    props: {
      session
    }
  }
}