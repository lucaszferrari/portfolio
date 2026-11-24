import Apresentacao from '../components/Apresentacao.jsx'
import Titulo from '../components/Titulo.jsx'
import Habilidades from '../components/Habilidades.jsx'
import { perfil, sobre, habilidades } from '../dados.js'

function Inicio() {
  return (
    <>
      <Apresentacao nome={perfil.nome} cargo={perfil.cargo} resumo={perfil.resumo} />

      <section>
        <Titulo numero="01" texto="Sobre mim" />
        {sobre.map((paragrafo, i) => (
          <p key={i} className="paragrafo">{paragrafo}</p>
        ))}
      </section>

      <Habilidades lista={habilidades} />
    </>
  )
}

export default Inicio
