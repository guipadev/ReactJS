import React from "react";

const LinkRuta = ({rutaIr, rutaNombre}) => {
    return (  
        <>
            <a href={rutaIr} alt="xx">
              <span>{rutaNombre}</span>
            </a>
        </>
    );
}

export default LinkRuta;