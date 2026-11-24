// Título de seção reutilizável. Recebe o número e o texto por props.
function Titulo({ numero, texto }) {
  return (
    <h2 className="titulo">
      <span className="titulo-numero">{numero}.</span> {texto}
    </h2>
  )
}

export default Titulo
