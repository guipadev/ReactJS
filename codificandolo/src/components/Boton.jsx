import { useState } from "react"

export const Boton = () => {
  
  const [temperatura, setTemperatura] = useState(19)

  const subir = () => {
    setTemperatura(temperatura + 1)
  }

  const bajar = () => {
    setTemperatura(temperatura - 1)
  }

  const pulsar = () => {
    alert('Me has pulsado')
  }

  return (
    <>
      <div>
      <button 
        className="btn btn-dark"
        onClick={pulsar}
        //onClick={()=>{pulsar()}}
      >
        Pulsame
      </button>
    </div>
    <div>
      <h2>Uso Operador Ternario</h2>
      <h4>La temperatura es: {temperatura}</h4>
      <p>
        {
          temperatura > 21 ? 'Hace calor 🥵' : 'Hacer frio 🥶'
        }
      </p>
      <button onClick={subir} className="btn btn-danger">Aumentar temperatura</button>
      <button onClick={bajar} className="btn btn-primary">Disminuir temperatura</button>
    </div>
    </>
  )
}
