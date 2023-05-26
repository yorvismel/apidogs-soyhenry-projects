/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';

import { filterByName, filterCreatedDog, filterByWeight, FilterByTemperament, getAllDogs, getTemperaments } from "../../redux/actions/actions";
import Card from "../card/Card";
import SearchBar from '../searchbar/SearchBar';
import Paginate from '../paginate/Paginate';
import loadingImage from './img/drawing-2802_256.gif'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <h1>Dogs World</h1>
            
      <div className="headerContainerLeft">
        
        <div className="menu-icon" onClick={toggleMenu}>
          
          <FaBars />
        </div>
        <div className={`containerFilters ${isMenuOpen ? 'active' : ''}`}>
          <div className="select-container">
            <select onChange={handlerFilterName}>
              <option  defaultValue>Ordenar por nombre</option>
              <option value='A-Z'>A-Z</option>
              <option value='Z-A'>Z-A</option>
            </select>
          </div>
          <div className="select-container">
            <select onChange={handlerFilterWeight}>
              <option defaultValue>Ordenar por peso</option>
              <option value="max_weight">Max</option>
              <option value="min_weight">Min</option>
            </select>
          </div>
          <div className="select-container">
            <select onChange={handlerFilterCreated}>
              <option  defaultValue>Ordenar por creación</option>
              <option value='all'>Todos</option>
              <option value='created'>Creados</option>
              <option value='api'>API</option>
            </select>
          </div>
          <div className="select-container">
            <select onChange={handlerFilterTemperament}>
              <option  defaultValue>Temperamentos</option>
              <option value='All'>Todos</option>
              {allTemperaments.map(temp => (
                <option value={temp.name} key={temp.id}>{temp.name}</option>
                
              ))}
            </select>
            
          </div>
          
        </div>
      </div>
      
      <div className="arreglo">
        
            <Link to='/create'>
              <button className="btn">Crear</button>
            </Link>
            
            
          </div>
          <Paginate dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado} currentPage={currentPage} />
      <div className="search">
        <SearchBar paginado={paginado} />
      </div>
      <div>
        {Object.keys(allDogs).length ?
          <div>
            {currentDogs?.map((el) => {
              return (
                <div className="containertarjetas" key={el.id}>
                  <Card key={el.id} id={el.id} image={el.image} name={el.name} temperament={el.temperament} weight_min={el.weight_min} weight_max={el.weight_max} lifeTime={el.lifeTime} />
                </div>
              )
            })}
          </div> :
          <div>
            <div>
  <img className="loading-image" src={loadingImage} alt="Loading..." />
</div>
          </div>}
      </div>
    </div>
  );
}
