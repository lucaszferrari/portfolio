import { useState } from 'react'
import Titulo from './Titulo.jsx'

// Mostra as habilidades em abas. useState guarda qual aba está selecionada.
function Habilidades({ lista }) {
  const categorias = Object.keys(lista) // ['Arquitetura', 'Backend', ...]
  const [abaAtiva, setAbaAtiva] = useState(categorias[0])

  return (
    <section>
      <Titulo numero="02" texto="Habilidades" />

      <div className="abas">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={categoria === abaAtiva ? 'aba ativa' : 'aba'}
            onClick={() => setAbaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Só aparecem as habilidades da aba escolhida */}
      <ul className="tags">
        {lista[abaAtiva].map((habilidade) => (
          <li key={habilidade} className="tag">{habilidade}</li>
        ))}
      </ul>
    </section>
  )
}

export default Habilidades
