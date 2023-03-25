
export const Cards = (props) => {
  //Extraemos todas las props con Object Destructuring
  const { imagen, titulo, texto } = props
  
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={imagen} className="card-img-top img-thumbnail" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
        <a href="NA" className="btn btn-primary">Ver más</a>
      </div>
    </div>
  )
}
