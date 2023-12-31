"use client"
import {useSession} from "next-auth/react"
import Image from 'next/image'
import style from './header.module.css';
import { NamePageHelper } from "../../utils/namePage"
import { usePathname } from "next/navigation";


function Header() {
  const {data: session} = useSession();
  const pathname = usePathname()
  const namePage = pathname.includes('clientes');

  return (
    <div className={style.header}>
      <div className={style.headerNamePage}>
      <h2 className={style.namePage}>{NamePageHelper()}</h2>
      {pathname.length > 1 && <p className={style.pathPage}>{pathname}</p>}
      </div>
      <div className={style.contentAvatar}>
        <div className={style.circle}>
          <Image
              src={session?.user?.image} 
              alt="Profile Image" 
              className={style.avatar}
              width={50}
              height={50}
          />
        </div>
        <div className={style.nameAndRole}>
          <p className="px-2">{session?.user?.name}</p>
          <p className="px-2" style={{marginTop: '-5px', fontSize: '14px', color: '#00000068'}}>Secretario</p>
        </div>
      </div>
    </div>
  )
}

export default Header