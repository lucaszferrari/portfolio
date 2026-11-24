import { useState } from 'react'

// Card reutilizável: o mesmo componente mostra qualquer projeto recebido por props.
function CardProjeto({ nome, tipo, resumo, detalhes, tecnologias, link }) {
  // Cada card controla sozinho se os detalhes estão abertos ou não
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  return (
    <article className="card">
      <span className="card-tipo mono">{tipo}</span>
      <h3>{nome}</h3>
      <p>{resumo}</p>

      {/* Renderização condicional: o parágrafo só existe se mostrarDetalhes for true */}
      {mostrarDetalhes && <p className="card-detalhes">{detalhes}</p>}

      <ul className="tags pequenas">
        {tecnologias.map((tec) => (
          <li key={tec} className="tag">{tec}</li>
        ))}
      </ul>

      <div className="card-rodape">
        <button className="link-botao" onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>
          {mostrarDetalhes ? '− Menos detalhes' : '+ Mais detalhes'}
        </button>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">GitHub ↗</a>
        ) : (
          <span className="mono privado">repo privado</span>
        )}
      </div>
    </article>
  )
}

export default CardProjeto
