import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Rodape from './components/Rodape.jsx'
import Inicio from './pages/Inicio.jsx'
import Projetos from './pages/Projetos.jsx'
import Contato from './pages/Contato.jsx'

// App define o layout fixo (Navbar + Rodapé) e troca só o miolo conforme a rota
function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Rodape />
    </>
  )
}

export default App
