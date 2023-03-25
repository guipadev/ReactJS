import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({ updateSpecies, updatePageNumber }) => {

    // matriz para contener todos nuestros datos de especies posibles: 👇
    let species = [
        "Human", "Alien", "Humanoid",
        "Poopybutthole", "Mythological", "Unknown",
        "Animal", "Disease","Robot","Cronenberg","Planet",
    ];

    return (
        <>
            <div className="accordion-item ">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                      aria-expanded="false" aria-controls="collapseTwo"
                    > 
                        Species 
                    </button>
                </h2>
            </div>

            {/*Creamos los botones de especies mapeando nuestros datos de matriz de esta manera: 👇*/}
            <div
                id="collapseTwo" className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {species.map((item, index) => {
                        return (
                          <FilterBTN
                            name="species" 
                            index={index} 
                            key={index}
                            updatePageNumber={updatePageNumber}
                            task={updateSpecies} 
                            input={item}
                          />
                        );
                    })}
                </div>
            </div>
        </>
    )}
 
export default Species;