import LinkRuta from "./LinkRuta";

const BotonProps= ({palabra}) => {
    return ( 
    <>
        <button className={palabra.clase}>
            <LinkRuta 
              rutaIr={palabra.link}
              rutaNombre={palabra.nombre}
            />
        </button>
    </> 
    );
}
 
export default BotonProps;