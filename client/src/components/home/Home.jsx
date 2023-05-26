/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { filterByName, filterCreatedDog, filterByWeight, FilterByTemperament, getAllDogs, getTemperaments } from "../../redux/actions/actions";
import Card from "../card/Card";
import SearchBar from '../searchbar/SearchBar';
import Paginate from '../paginate/Paginate';
import '../home/Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector(state => state.dogs);
  const allTemperaments = useSelector(state => state.temperaments);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogPerPage] = useState(8);
  const indexLastDog = currentPage * dogsPerPage;
  const indexFirstDog = indexLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexFirstDog, indexLastDog);

  const paginado = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, []);

  const handleClick = e => {
    window.location.reload(false);
  };

  const handlerFilterCreated = e => {
    dispatch(filterCreatedDog(e.target.value));
    setCurrentPage(1);
  };

  const handlerFilterTemperament = e => {
    e.preventDefault();
    dispatch(FilterByTemperament(e.target.value));
    setCurrentPage(1);
  };

  const handlerFilterName = e => {
    dispatch(filterByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handlerFilterWeight = e => {
    dispatch(filterByWeight(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  return (
    <div className="container_home">
      <div>
        <Link to="/">
          <button className="logo">World Dog's</button>
        </Link>
      </div>
      <div className="headerContainerLeft">
        <div className="containerFilters">
          <select onChange={handlerFilterName}>
            <option disabled selected defaultValue>Ordenar por nombre</option>
            <option key={1} value='A-Z'>A-Z</option>
            <option key={2} value='Z-A'>Z-A</option>
          </select>
          <select onChange={handlerFilterWeight}>
            <option disabled selected defaultValue>Ordenar por peso</option>
            <option key={1} value="max_weight">Max</option>
            <option key={2} value="min_weight">Min</option>
          </select>
          <select onChange={handlerFilterCreated}>
            <option disable selected defaultValue>Ordenar por creación</option>
            <option key={1} value='all'>Todos</option>
            <option key={2} value='created'>Creados</option>
            <option key={3} value='api'>API</option>
          </select>
          <select onChange={handlerFilterTemperament}>
            <option disabled selected defaultValue>Temperamentos</option>
            <option key={1 + 'e'} value='All'>Todos</option>
            {allTemperaments.map(temp => (
              <option value={temp.name} key={temp.id}>{temp.name}</option>
            ))}
          </select>
          <div className="arreglo">
            <Link to='/create'>
              <button className="btn">Crear</button>
            </Link>
            <button className="btn" onClick={handleClick}>Reset</button>
          </div>
        </div>
      </div>
      <Paginate dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado} currentPage={currentPage}/>
      <div className="search">
        <SearchBar paginado={paginado} />
      </div>
      <div>  
        {Object.keys(allDogs).length ? 
          <div>  
            {currentDogs?.map((el) => {
              return(
                <div className="containertarjetas" key={el.id}>
                  <Card key={el.id} id={el.id} image={el.image} name={el.name} temperament={el.temperament} weight_min={el.weight_min} weight_max={el.weight_max} lifeTime={el.lifeTime}/>
                </div>
              )
            })}
          </div> :
          <div>
            <h1>Loading...</h1>
          </div>}
      </div>  
    </div>
  );
}
