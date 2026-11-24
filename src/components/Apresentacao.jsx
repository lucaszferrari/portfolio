import { Link } from 'react-router-dom'
import foto from '../assets/foto.jpg'

// Recebe os dados da pessoa por props (vêm de dados.js através da página Inicio)
function Apresentacao({ nome, cargo, resumo }) {
  return (
    <section className="apresentacao">
      <div className="apresentacao-texto">
        <p className="mono destaque">Olá, eu sou</p>
        <h1>{nome}</h1>
        <p className="cargo">{cargo}</p>
        <p className="resumo">{resumo}</p>
        <div className="botoes">
          <Link to="/projetos" className="botao">Ver projetos</Link>
          <Link to="/contato" className="botao botao-vazado">Fale comigo</Link>
        </div>
      </div>
      <img src={foto} alt={`Foto de ${nome}`} className="foto" />
    </section>
  )
}

export default Apresentacao
