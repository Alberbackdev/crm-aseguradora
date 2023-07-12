"use client"

import { useRouter } from 'next/router'
import { useForm } from "../../utils/useForm";
import style from './InputCodigoSeguro.module.css'
import { createPolizeAction } from '../../services/polizaServices';
//This is form for new client

export const InputCodigoSeguro = ({data}) => {
    const router = useRouter()
    console.log(data)
    //llama a la funcion para actualizar el estado del input
    const { values, handleInputChange, reset } = useForm({ codigoPoliza: "" })
    //actua como actualizador y reseteo de forms
    const sendCodigo = (ev) => createPolizeAction(ev, values, reset)

    return (
        <div className={style.container}>
            <form onSubmit={sendCodigo} className={style.formContent}>
                <h1 className={style.title}>Nuevo Cliente</h1>
                <div className={style.group}>
                    <div className={style.groupChild}>
                        <label>Codigo de Poliza</label>                          
                        <input
                            name="codigoPoliza"
                            type="text"
                            placeholder={data.codigoPoliza}
                            className="rounded-3xl  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={values.codigoPoliza}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn-primary">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
