import React from 'react'
import styles from "./Search.module.scss"

const Search = ({ setSearch, updatePageNumber }) => {
    //Desestructurar nuestros accesorios
    //Creamos función llamada searchBtn para evitar comportamiento predeterminado de la aplicación  👇
    let searchBtn = (e) => {
        e.preventDefault();
    };

    return (
        <form
            className={
                `${styles.search} 
                d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`
            }
        >
            {/* Luego, creamos el botón y las etiquetas de entrada dentro de nuestra etiqueta de formulario. 👇 */}
            <input
                onChange={(e) => {
                    updatePageNumber(1);
                    setSearch(e.target.value);
                }}
                placeholder="Search for characters"
                className={styles.input}
                type="text"
            />
                <button
                    onClick={searchBtn}
                    className={`${styles.btn} btn btn-primary fs-5`}
                >
                    Search
                </button>
        </form>
    )
}

export default Search
