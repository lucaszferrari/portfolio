import { perfil } from '../dados.js'

function Rodape() {
  return (
    <footer className="rodape">
      <p>© 2026 {perfil.nome} · Feito com React + Vite</p>
    </footer>
  )
}

export default Rodape
