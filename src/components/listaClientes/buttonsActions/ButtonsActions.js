"use client"
import style from './buttonsActions.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router'


function ButtonsActions() {
    const router = useRouter()


  return (
    <div className={style.contentButtons}>
        <button type='button'>
            <Image
                priority
                src="/upload.png"
                height={24}
                width={24}
                alt="Follow us on Twitter"
            />
            Exportar
        </button>
        <button type='button' onClick={() => router.push('/clientes/crear')}>
            <Image
                priority
                src="/add.png"
                height={24}
                width={24}
                alt="Follow us on Twitter"
            />
            Registrar
        </button>
    </div>
  )
}

export default ButtonsActions