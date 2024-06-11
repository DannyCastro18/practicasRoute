import AdminPage from './pages/administrador/AdminPages'
import Propietarios from './pages/propietarios/propietariosPages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Hola mundo</h1>
      <main>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to='/administrador'>Administrador</Link>
                <Link to='/propietarios'>Propietarios</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/administrador' element={<AdminPage />} />
            <Route path='/propietarios' element={<Propietarios />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        Footer
      </footer>
    </>
  )
}
export default App