import React, { useState } from 'react'
import '../hojas-de-estilo/Formulario.css'

const Formulario = ({agregar}) => {

    const [tarea, setTarea] = useState('')

    const handleChange =(e)=>{
        e.preventDefault();
        setTarea(e.target.value);
    };

    const handleClick=(e)=>{
        e.preventDefault();
        agregar(tarea);
    };

  return (
    <div>
        <form className='tarea-form'>
            <input 
                className='tarea-input'
                onChange={handleChange}
                type="text" 
                name="texto" 
                placeholder='Ingresa una tarea' />
            <button
                onClick={handleClick}
                className='tarea-btn'>Agregar Tarea                
            </button>
        </form>
    </div>
  )
}

export default Formulario