import { Cards } from "./Cards";

export const PROPS = (props) => {
  return (
    <>
      <div>
        <p>{props.saludo}</p>
        <h4>Tiene la edad {props.edad}</h4>
      </div>
      <div>
        <h2>Ejemplo practico de las propiedades de componentes</h2>
        <hr />
        <div className="row">
          <div className="col">
            <Cards
              imagen="https://www.fillmurray.com/200/300"
              titulo="Titulo card 1"
              texto="Texto de la Card 1"
            />
          </div>
          <div>
            <Cards
              imagen="https://www.fillmurray.com/200/300"
              titulo="Titulo card 2"
              texto="Texto de la Card 2"
            />
          </div>
          <div>
            <Cards
              imagen="https://www.fillmurray.com/200/300"
              titulo="Titulo card 3"
              texto="Texto de la Card 3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
