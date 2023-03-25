import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

//Creamos una variable llamada display. Esto contendrá todas nuestras cartas.
//Junto con esto, crearemos una declaración if else para verificar si los datos
//que obtuvimos de nuestra API están vacíos o no.

//primero desestructura los datos que obtuvimos de nuestro componente App.js.
const Card = ({ page, results }) => {
  let display;
  //console.log(results)

  if (results) {
    display = results.map((x) => {
      //Creamos variables de los estados objetos que tiene la api que consumimos para mostrar estos datos
      let { id, image, name, status, location } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {/* Validación para saber si el usuario esta vivo, muerto o desconocido */}
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No se encontraron datos 😟❗";
  }

  return <>{display}</>;
};

export default Card;
