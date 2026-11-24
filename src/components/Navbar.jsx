import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Barra de navegação. No celular, o menu abre e fecha com useState.
function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  // Ao clicar num link, fecha o menu (no celular)
  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={fecharMenu}>
        &lt;LF /&gt;
      </NavLink>

      <button className="botao-menu" onClick={() => setMenuAberto(!menuAberto)}>
        {menuAberto ? '✕' : '☰'}
      </button>

      {/* A classe "aberto" só entra quando menuAberto é true */}
      <nav className={menuAberto ? 'links aberto' : 'links'}>
        <NavLink to="/" end onClick={fecharMenu}>Início</NavLink>
        <NavLink to="/projetos" onClick={fecharMenu}>Projetos</NavLink>
        <NavLink to="/contato" onClick={fecharMenu}>Contato</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
