import React from "react";
import Status from "./Category/Status";
import Species from "./Category/Species";
import Gender from "./Category/Gender";


//Desestructura los props pasados ​​y colocar acordeón que incluya un clear button
const Filter = ({
    pageNumber, updatePageNumber,
    updateStatus, updateGender,
    updateSpecies,
}) => {
  
    let clear = () => {
        updateStatus("");
        updateGender("");
        updateSpecies("");
        updatePageNumber(1);
        window.location.reload(false);
      };

    return (
      <>
        <div className="col-lg-3 col-12 mb-5">
          <div className="text-center fw-bold fs-4 mb-2">Filters</div>
          <div
          style={{ cursor: "pointer" }} onClick={clear}
          className="text-primary text-decoration-underline text-center mb-3"
          > 
              Clear Filters 
          </div>
          <div className="accordion" id="accordionExample">
          {/* Category components will be placed here */}
          </div>

          {/* Filtro de Estado */}
          <Status
            updatePageNumber={updatePageNumber}
            updateStatus={updateStatus}
          />

          {/* Filtro de Especies */}
          <Species
            updatePageNumber={updatePageNumber}
            updateSpecies={updateSpecies}
           />

           {/* Filtro de Gender */}
          <Gender
            updatePageNumber={updatePageNumber}
            updateGender={updateGender}
          />
        </div>
        
      </>
    );
};


export default Filter
