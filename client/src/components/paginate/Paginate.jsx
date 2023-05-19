import React from "react";
import "./Paginate.css"

export default function Paginate({ dogsPerPage, allDogs, paginado, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="back">
            <ul className="ul">
                <li className="list">
                    <button disabled={currentPage === 1} onClick={() => paginado(currentPage - 1)}>Back  &#x1F43E;</button>
                </li>
                <li className="list">
                    <button disabled={currentPage === pageNumbers.length} onClick={() => paginado(currentPage + 1)}>Go  &#x1F43E;</button>
                </li>
            </ul>
        </nav>
    )
}


