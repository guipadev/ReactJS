// importamos gqldesde el @apollo/clientpara definir nuestra consulta
import { gql } from "@apollo/client";

// contendrá la consulta y cualquier otra función

/**
 * Creamos y exportamos la variable GET_CHARACTERScomo una cadena con letras mayúsculas. 
 * El uso de mayúsculas se considera una práctica recomendada al definir consultas en GraphQL.
 * También se considera una buena práctica envolver cadenas con un literal de plantilla.
 * 
 * Los objetos en Javascript son colecciones o contenedores llenos de pares clave-valor. 
 * Un par clave-valor se denomina propiedad.
 * 
 * La consulta, en nuestro caso, busca los personajes de Rick and Morty. 
 * Devuelve un objeto con la results propiedad, que es una matriz de objetos de caracteres.
 * 
 * Cada personaje tiene propiedades como nombre, especie, estado, tipo, género e imagen; 
 * puedes elegir lo que quieres obtener.

Las otras propiedades, origen y ubicación, son objetos con una propiedad de nombre para el origen y la ubicación de cada personaje.
 */
export const GET_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        name
        species
        status
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;

/**
 *
 * crea export function CharacterList()una función que también se exporta y puede ser utilizada
 * por otras partes del código.
 *
 * La searchTerm variable inicializa el estado de búsqueda en una cadena vacía y crea una función
 * setSearchTermpara actualizar el valor.
 *
 * El useQuery gancho de @apollo/clientla biblioteca obtiene datos de la API.
 *
 * La consulta pasa GET_CHARACTERS y una variable llamada searchTerm que es una variable para
 * contener los nombres de los personajes que se buscan.
 *
 * La handleChange  variable establece searchTerm el valor de al valor actual del campo de
 * entrada.
 * El input campo es la barra de búsqueda que el usuario utilizará para buscar los nombres de
 * los personajes que desea ver. El estado es manejado por handleChange.
 *
 * También debemos tener en cuenta los problemas con la carga del sitio, así como cualquier
 * error que pueda ocurrir.
 *
 * loading se representa dinámicamente con un control giratorio si la carga se establece en True.
 * Se muestra un mensaje de error si el error se establece en True.
 *
 * Cuando el usuario está buscando un personaje que no existe, queremos presentar un mensaje y
 * un personaje alternativo sobre el que puedan encontrar más información; aquí es donde entra
 * RandomCharacter en juego.
 *
 * Una vez que buscamos los datos, asignamos la data.characters.resultsmatriz a la tarjeta de
 * cada personaje.
 *
 * También queremos cambiar el fondo de las tarjetas para representar el personaje al que
 * pertenece la información.
 * El backgroundImage en la style propiedad maneja el cambio dinámico de las imágenes.
 * El resto de los elementos se muestran como texto en la tarjeta.
 */
