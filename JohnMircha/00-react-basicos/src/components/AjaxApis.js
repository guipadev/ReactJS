import React, { Component } from "react";

function Pokemon(props) {
  return (
 
      <div className="container">
        <div className="row">
          <figure className="col">
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
          </figure>
        </div>
      </div>
 
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              //console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_shiny,
              };

              let pokemons = [...this.state.pokemons, pokemon];

              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h1>Peticiones Asíncronas en Componentes de Clase</h1>

        {
          this.state.pokemons.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.pokemons.map((el) => (
              <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
            ))
          )
        }
      </>
    );
  }
}
