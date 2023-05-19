import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getDogName } from '../../redux/actions/actions'
import { useHistory } from "react-router-dom";
import  './SearchBar.css'

export default function SearchBar ({paginado}) {
    const dispatch = useDispatch();
    const [searchDog, setSearchDog] = useState('')
    const history = useHistory();
    

    const handleInput = (e) => {
        e.preventDefault()
        setSearchDog(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchDog)
        dispatch(getDogName(searchDog))
        setSearchDog('')
        history.push('/home')
        paginado(1)
    }

    return (
        <div className="searchbar_container">
            <form className="form">
                <input className="searchbar" type="text" onChange={e => handleInput(e)} value={searchDog} placeholder="Search..."/>
                <button className="searchbar_button" type="submit" onClick={e => handleSubmit(e)}>Look for</button>
            </form>
        </div>
    )
}

