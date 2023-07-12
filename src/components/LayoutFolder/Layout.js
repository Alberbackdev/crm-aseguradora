// plantilla dentro del cuadro blanco
import { useSession, signIn } from "next-auth/react"
import Nav from "../Sidebar/Sidebar"
import style from './layout.module.css'
import Header from "../Header/Header"
import Link from 'react'

//children es el nombre de la pagina que esta accediedo
export default function Layout({ children }) {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }
  if (session) {
    return <p>Signed in as {session.user.email}</p>
  }

  return <Link href="/api/auth/signin" />
//if a user is logged, show control panel admin
//children is name of page

}