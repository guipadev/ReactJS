import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    //console.log(info.pages)

    //Funcion cambio de pagina
    let pageChange = (data) => {
        setPageNumber(data.selected + 1);
    };
    
    //Para que nuestro componente de paginación responda, 
    //necesitamos escribir este pequeño componente
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


/*  //No utilizaremos la páginación de forma manual
    //Sera por medio de la libreria ReactPaginate
    let next = () => {
        setPageNumber((x) => x + 1)
    }

    let prev = () => {
        if (pageNumber === 1) return
        setPageNumber((x) => x - 1)
    }

    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={prev} className="btn btn-primary">Prev</button>
            <button onClick={next} className="btn btn-primary">Next</button>
        </div>
    )
*/
    return (
        <>
            <ReactPaginate 
                className="pagination justify-content-center gap-4 my-4"
                nextLabel= "Next"
                previousLabel="Prev"
                previousClassName="btn btn-primary fs-5 prev"
                nextClassName="btn btn-primary fs-5 next"
                activeClassName="active"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                forcePage={pageNumber === 1 ? 0 : pageNumber -1}
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                onPageChange={pageChange}
                pageCount={info?.pages} 
            />

            <style jsx>
                {`
                  a {
                    color: white; text-decoration: none;
                  }
                  @media (max-width: 768px) {
                    .pagination {font-size: 12px}
                
                    .next,
                    .prev {display: none}
                  }
                  @media (max-width: 768px) {
                    .pagination {font-size: 14px}
                  }
                `}
            </style>
        </>
    )
}

export default Pagination
