import style from './listado.module.css'
import Image from 'next/image';


function Listado() {
  return (
    <div className={style.listado}>
        <div className={style.card}>
            <div className={style.cardTop}>
                <p>Activo</p>
                <div className={style.icons}>
                    <Image
                        priority
                        src="/edit.png"
                        height={17}
                        width={17}
                        style={{marginRight: '10px'}}
                        alt="Follow us on Twitter"
                    />
                    <Image
                        priority
                        src="/trash.png"
                        height={17}
                        width={17}
                        alt="Follow us on Twitter"
                    />
                </div>
            </div>

            <div className={style.dataUser}>
                <p>73948q045</p>
                <p>Darlene Robertson</p>
            </div>

            <div className={style.cardBottom}>
                <div className={style.calendarIcon}>
                    <Image
                        priority
                        src="/calendar.png"
                        height={20}
                        width={20}
                        alt="Follow us on Twitter"
                    />
                </div>
                <div className={style.dateCard}>
                    <p>FECHA DE PAGO</p>
                    <p>Viernes 24, Febrero</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Listado