import './App.css'
import './miCSS.css'
import imagen from './images/ricy.jpg'
import rey1 from './images/reyes/rey_ervigio.png'
import rey2 from './images/reyes/rey_recesvinto.png'
import rey3 from './images/reyes/rey_teodorico.png'

function App() {

  let nombre = "yao";
  let caja = <div>Nombre</div>;
  let arrayDatos = ["jose", "ruben", "juan"]
  let objeto = {nombre: "nata", edad: 20}
  let arrayObjetos = [{name: "luis", edad: 15}, {name: "Pedro", edad: 19}]

  let nombresReyes = ["Ervigio", "Recesvinto", "Teodorico"]

  return (
    <div className='fondo'>
      <h1>Curso de React</h1>
      <h2>{arrayDatos[1]}</h2>
      <h3>{objeto.edad}</h3>
      <h4>{arrayObjetos[1].name}</h4>
      <img src={imagen} className="im" alt="ricky"/>
      <div>{nombre}</div>
      <div>{caja}</div>
      <input value={nombre} />
      { //Colocar código JavaScript 
        alert("Hola mundo")
      }
      <br/>
      <br/>
      <div className='contenedor'>
        <div className='caja'>
          <img src={rey1} alt='rey' />
          <div className='nombre'>{nombresReyes[0]}</div>
        </div>
        <div className='caja'>
          <img src={rey2} alt='rey' />
          <div className='nombre'>{nombresReyes[1]}</div>
        </div>
        <div className='caja'>
          <img src={rey3} alt='rey' />
          <div className='nombre'>{nombresReyes[2]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
