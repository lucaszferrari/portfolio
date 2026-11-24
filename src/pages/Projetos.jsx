import { useState } from 'react'
import Titulo from '../components/Titulo.jsx'
import CardProjeto from '../components/CardProjeto.jsx'
import { projetos } from '../dados.js'

function Projetos() {
  // Filtro por tipo de projeto
  const [filtro, setFiltro] = useState('Todos')

  // Monta a lista de filtros sem repetir: ['Todos', 'SaaS', 'Acadêmico', 'Infra']
  const tipos = ['Todos', ...new Set(projetos.map((p) => p.tipo))]

  const projetosFiltrados =
    filtro === 'Todos' ? projetos : projetos.filter((p) => p.tipo === filtro)

  return (
    <section>
      <Titulo numero="03" texto="Projetos" />

      <div className="abas">
        {tipos.map((tipo) => (
          <button
            key={tipo}
            className={tipo === filtro ? 'aba ativa' : 'aba'}
            onClick={() => setFiltro(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className="grade">
        {projetosFiltrados.map((projeto) => (
          // {...projeto} passa cada campo do objeto como uma prop separada
          <CardProjeto key={projeto.id} {...projeto} />
        ))}
      </div>
    </section>
  )
}

export default Projetos
