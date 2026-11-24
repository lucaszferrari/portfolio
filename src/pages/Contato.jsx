import { useState } from 'react'
import Titulo from '../components/Titulo.jsx'
import { perfil } from '../dados.js'

function Contato() {
  // Formulário controlado: o React guarda o valor de cada campo
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviado, setEnviado] = useState(false)

  function enviar(evento) {
    evento.preventDefault() // impede a página de recarregar
    setEnviado(true)
  }

  return (
    <section>
      <Titulo numero="04" texto="Contato" />
      <p className="paragrafo">
        Quer conversar sobre arquitetura, um projeto ou uma oportunidade? Me manda uma mensagem
        ou me encontra no <a href={perfil.github} target="_blank" rel="noreferrer">GitHub</a>.
      </p>

      {enviado ? (
        <div className="sucesso">
          <p>Valeu, {nome}! Recebi sua mensagem.</p>
          <button className="botao" onClick={() => { setEnviado(false); setNome(''); setMensagem('') }}>
            Enviar outra
          </button>
        </div>
      ) : (
        <form className="formulario" onSubmit={enviar}>
          <label>
            Seu nome
            <input value={nome} onChange={(e) => setNome(e.target.value)} required />
          </label>
          <label>
            Mensagem
            <textarea rows="5" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required />
          </label>
          <button type="submit" className="botao">Enviar</button>
        </form>
      )}
    </section>
  )
}

export default Contato
