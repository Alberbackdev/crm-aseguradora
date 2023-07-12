"use client"
import style from './numerosServicios.module.css'

function NumerosServicios() {
  return (
    <div className={style.container}>
        <h1 className={style.title}>N° Orden de Servicio</h1>               
        <input
            name="name"
            type="text"
            placeholder="0448"
            className="rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"            
        />
    </div>
  )
}

export default NumerosServicios