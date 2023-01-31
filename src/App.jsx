import './App.css'
import Lista from './componentes/Lista'

function App() {

  return (
    <div className="to-do-app">
      <div className='lista-tareas'>
        <h1>Mis tareas</h1>
        <Lista/>
      </div>          
    </div>
  )
}

export default App
