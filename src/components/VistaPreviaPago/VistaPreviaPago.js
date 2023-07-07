import style from './vistaPreviaPago.module.css'
import Image from 'next/image';

function VistaPreviaPago() {
  return (
    <div className={style.container}>
       <div className={style.successMessage}>
            <div className={style.circleContent}>
                <Image
                    priority
                    src="/successIcon.png"
                    height={20}
                    width={20}
                    alt="Follow us on Twitter"
                />
            </div>
            <div>
                <p className={style.blueMessage}>Tu Registro ha Finalizado con Exito!</p>
                <p className={style.grayMessage}>Los datos ingresados han sido registrados correctamente!</p>
            </div>
       </div>
       <div className={style.content_codigoSeguro}>
            <p className={style.titleInfo}>Codigo del Seguro: </p>
            <p className={style.codigoSeguro}>58489j54</p>
       </div>

       <div className={style.detallesCliente}>
            <p className={style.title_detallesCliente}>Detalles del Registro Cliente</p>
            <p className={style.titleInfo}>Datos del Cliente</p>

            <div className={style.dataCliente}>
                <div className={style.field}>
                    <p className={style.title_field}>Nombres Y Apellidos</p>
                    <p className={style.data_field}>Yulihanny Patricia Mendez Aldana</p>
                </div>
                <div className={style.field}>
                    <p className={style.title_field}>Cedula de Identidad</p>
                    <p className={`${style.data_field} ${style.right}`}>V-5785881</p>
                </div>
            </div>
            <div className={style.dataCliente}>
                <div className={style.field}>
                    <p className={style.title_field}>Numero de Telefono</p>
                    <p className={style.data_field}>0412-5546987</p>
                </div>
                <div className={style.field}>
                    <p className={`${style.title_field} ${style.right}`}>Edad</p>
                    <p className={`${style.data_field} ${style.right}`}>32 Años</p>
                </div>
            </div>
       </div>

       <div className={style.detallesPoliza}>
            <p className={style.titleInfo}>Datos de la Poliza</p>

            <div className={style.dataPoliza}>
                <div className={style.field}>
                    <p className={style.title_field}>Nombre del Cobrador/Vendedor</p>
                    <p className={style.data_field}>Alberto Felipe Graterol</p>
                </div>
                <div className={style.field}>
                    <p className={style.title_field}>Ciudad</p>
                    <p className={style.data_field}>Valera</p>
                </div>
                <div className={style.field}>
                    <p className={style.title_field}>Status</p>
                    <p className={`${style.data_field} ${style.right}`}>Activo</p>
                </div>
            </div>
            <div className={style.dataPoliza}>
                <div className={style.field}>
                    <p className={style.title_field}>Fecha de Contrato</p>
                    <p className={style.data_field}>24/02/2023</p>
                </div>
                <div className={style.field}>
                    <p className={`${style.title_field}`}>N° Beneficiarios</p>
                    <p className={`${style.data_field} ${style.right}`}>6</p>
                </div>
            </div>
       </div>

       <div className={style.contentBeneficiarios}>
            <p className={style.titleInfo}>Lista de Beneficiarios</p>
            <div className={style.listaBeneficiarios}>
                <div className={style.row}>
                    <div className={style.row_content}>
                        <p>Datos</p>
                        <p>Maria Victoria Santos</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Fecha de Nacimiento</p>
                        <p>25/02/2023</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Cedula</p>
                        <p>V-26.445.695</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Edad</p>
                        <p>22 Años</p>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row_content}>
                        <p>Datos</p>
                        <p>Maria Victoria Santos</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Fecha de Nacimiento</p>
                        <p>25/02/2023</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Cedula</p>
                        <p>V-26.445.695</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Edad</p>
                        <p>22 Años</p>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row_content}>
                        <p>Datos</p>
                        <p>Maria Victoria Santos</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Fecha de Nacimiento</p>
                        <p>25/02/2023</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Cedula</p>
                        <p>V-26.445.695</p>
                    </div>
                    <div className={style.row_content}>
                        <p>Edad</p>
                        <p>22 Años</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default VistaPreviaPago