"use client"
import { useRouter } from 'next/router'
import style from './formResponsable.module.css'

function FormResponsable() {
    const router = useRouter()
    const values = {};


  return (
    <div className={style.container}>
    <form className={style.formContent}>
        <h1 className={style.title}>Ingrese los Datos</h1>               
        <div className={style.full_input}>
            <label>Nombres y Apellidos</label>                          
            <input
                name="name"
                type="text"
                placeholder="Maria Grabiela Garcia Moron"
                className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.name}
                // onChange={handleInputChange}
            />
        </div>
        <div className={style.group}>
            <div className={style.groupChild}>
                <label>Cedula de Identidad</label>                          
                <input
                    name="name"
                    type="text"
                    placeholder="V-57581234"
                    className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.name}
                    // onChange={handleInputChange}
                />
            </div>
            <div className={style.groupChild}>
                <label>Numero de Telefono</label>
                <input
                    name="lastname"
                    type="text"
                    placeholder="0416-80762846"
                    className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.lastname}
                    // onChange={handleInputChange}
                />
            </div>
        </div>
        <div className={style.group}>
            <div className={style.groupChild}>
                <label>Parentesco</label>                          
                <input
                    name="name"
                    type="text"
                    placeholder="Madre"
                    className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.name}
                    // onChange={handleInputChange}
                />
            </div>
            <div className={style.groupChild}>
                <label>Dirección</label>                          
                <input
                    name="name"
                    type="text"
                    placeholder="Av. Libertador, Santa rosa."
                    className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.name}
                    // onChange={handleInputChange}
                />
            </div>
        </div>
        <div className={`${style.full_input} ${style.divtypeRadio}`} >
            <label>Tiene seguro el difunto</label> 
            <div className={`${style.typeRadio}`}>
                <label htmlFor='si'>Si</label>                          
                <input
                    name="seguro_difunto"
                    type="radio"           
                    id='si'  
                    // onChange={handleInputChange}
                />
            </div>  
            <div className={`${style.typeRadio}`}>
                <label htmlFor='no'>No</label>                          
                <input
                    name="seguro_difunto"
                    type="radio"           
                    id='no'  
                    // onChange={handleInputChange}
                />
            </div>         
        </div>  
        <div className={style.full_input}>
            <label>Nombre del Seguro</label>                          
            <input
                name="name"
                type="text"
                placeholder="Basico"
                className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.name}
                // onChange={handleInputChange}
            />
        </div>     
        <div className={style.buttons}>   
            <button type="button" className="btn-primary" onClick={() => router.push('/ventas')}>
                Atras
            </button>              
            <button type="button" className="btn-primary" onClick={() => {}}>
                Siguiente
            </button>
        </div>
    </form>
</div>
  )
}

export default FormResponsable