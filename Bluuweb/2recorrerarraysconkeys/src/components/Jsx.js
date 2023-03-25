import React, { Fragment } from "react";

const Jsx = () => {

    const saludo = "SOY UNA CONSTANTE!"
    const temperatura = 21;

    return ( 
        <Fragment>
            <h2>Soy un componente {saludo}</h2>

            <h3>Frío o calor</h3>
            <h4>
                {
                    temperatura > 20 ? 'Calor' : 'Frio'
                }
            </h4>
        </Fragment>
        
     );
}
 
export default Jsx;