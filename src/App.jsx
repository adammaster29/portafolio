
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import '../Proyectos.css'
import '../Habilidades.css'
import '../Contactos.css'
import Home from './componentes/Home'
import Proyectos from './componentes/Proyectos'
import Habilidades from './componentes/Habilidades'
import Contactos from './componentes/Contactos'

function App() {
 

  return (
    <>
     <HashRouter>
      <Routes>
        <Route  path='/'  element={<Home  />} />
        <Route path='/proyectos' element={<Proyectos/>} />
        <Route path='/habilidades' element={ <Habilidades/> } />
        <Route path='/contactos' element={ <Contactos/> }/>
      </Routes>
     </HashRouter>
       
    </>
  )
}

export default App
