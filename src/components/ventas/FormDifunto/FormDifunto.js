"use client"
import { useRouter } from 'next/router'
import style from './FormDifunto.module.css'


function FormDifunto() {
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
                        <label>Fecha de Nacimiento</label>
                        <input
                            name="lastname"
                            type="date"
                            placeholder="Apellidos"
                            className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.lastname}
                            // onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={style.group}>
                    <div className={`${style.groupChild} ${style.typeNumber}`}>
                        <label>Edad</label>                          
                        <input
                            name="name"
                            type="number"
                            min={0}
                            placeholder='0'
                            className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.name}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className={`${style.groupChild} ${style.typeNumber}`}>
                        <label>N° Hijos</label>
                        <input
                            name="lastname"
                            type="number"
                            placeholder='0'
                            min={0}
                            className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.lastname}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className={style.groupChild}>
                        <label>Nombre del Conyugue</label>
                        <input
                            name="lastname"
                            type="text"
                            placeholder="Nombre del Conyugue"
                            className="rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.lastname}
                            // onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={style.full_input}>
                    <label>Dirección donde vivia</label>                          
                    <input
                        name="name"
                        type="text"
                        placeholder="Av. Libertador, Santa rosa."
                        className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.name}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className={style.full_input}>
                    <label>Lugar donde Fallecio</label>                          
                    <input
                        name="name"
                        type="text"
                        placeholder="Av. Libertador, Santa rosa."
                        className=" rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.name}
                        // onChange={handleInputChange}
                    />
                </div>
                <div className={style.buttons}>                 
                    <button type="button" className="btn-primary" onClick={() => router.push('/ventas/responsable')}>
                        Siguiente
                    </button>
                </div>
            </form>
    </div>
  )
}

export default FormDifunto;