import React, { useState } from 'react'
import Formulario from './Formulario'
import Tareas from './Tareas'
import '../hojas-de-estilo/Lista.css'

const Lista = () => {

const [tareas, setTareas] = useState([]);

const addTarea = (tarea)=>{
    setTareas(preTask => {
        return [...preTask, tarea];
    })
};

const deleteTarea = (id) =>{
    setTareas(preTask => {
        return preTask.filter((tarea, index) => index !== id);
    })
};

  return (
    <div>
        <Formulario
            agregar={addTarea}
        />
        <div className='lista-contenedor'>
            {tareas.map((tarea, index)=> (
                <Tareas
                    key={index}
                    id={index}
                    texto={tarea}
                    eliminar={deleteTarea}
                />
            ))}
        </div>
    </div>
  )
}

export default Lista