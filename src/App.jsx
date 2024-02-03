//importamos react router dom
import { BrowserRouter, Routes, Route} from 'react-router-dom'
//importamos layout
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'
//importamos login
import Login from './paginas/Login'
//importamos registrar
import Registrar from './paginas/Registrar'
//importamos olvidepassword
import OlvidePassword from './paginas/OlvidePassword'
//importamos nuevopassword
import NuevoPassword from './paginas/NuevoPassword'
//importamos confirmarcuenta
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
//importamos proyectos y nuevo proyectos
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'
//importamos proyecto
import Proyecto from './paginas/Proyecto'
//importamos editar proyecto
import EditarProyecto from './paginas/EditarProyecto'
//importamos nuevo colaborador
import NuevoColaborador from './paginas/NuevoColaborador'
//importamos authprovider
import {AuthProvider} from './context/AuthProvider'
import { ProyectosProvider } from './context/ProyectosProvider'


function App() {
  
  return (
     <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
        <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>
            
            <Route path="/proyectos" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path='Crear-proyecto' element={<NuevoProyecto />}/>
              <Route path='nuevo-colaborador/:id' element={<NuevoColaborador />}/>
              <Route path=':id' element={<Proyecto />}/>
              <Route path='editar/:id' element={<EditarProyecto />}/>
            </Route>
        </Routes>
        </ProyectosProvider>
      </AuthProvider>
     </BrowserRouter>
  )
}

export default App
