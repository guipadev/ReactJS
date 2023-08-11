import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

/**
 * El código anterior crea una instancia del cliente Apollo con la URL
 * (localizador uniforme de recursos) del punto final GraphQL de la API de Rick and Morty.
 *
 * El componente de la aplicación se envuelve con el componente del proveedor de Apollo para
 * pasar el cliente a todos los componentes secundarios.
 */
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/[GraphQL](https://graphql.org/)",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
