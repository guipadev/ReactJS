import "./Boton.css";

const Boton = ({boton, clase}) => {
    return ( 
    <>
        <button className={clase}>
            {boton}
        </button>
    </> 
    );
}
 
export default Boton;