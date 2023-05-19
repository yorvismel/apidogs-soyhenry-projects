/* eslint-disable no-unreachable */
import axios from 'axios'
import {GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_DOG_NAME, GET_DOG_DETAIL, FILTER_BY_NAME, FILTER_BY_WEIGHT, FILTER_BY_TEMPERAMENTS, FILTER_CREATED_DOG, CLEAR_DETAIL } from './actions.types'

const url = 'http://localhost:3001'



export function getAllDogs () {
    return async function (dispatch) {
        const json = await axios.get(`${url}/dogs`);
        return dispatch({
            type: GET_ALL_DOGS,
            payload: json.data
            })
        }    
    }

export function getTemperaments() {
    return async function (dispatch) {
        const json = await axios.get(`${url}/temperaments`)
        return dispatch({
            type: GET_ALL_TEMPERAMENTS,
            payload: json.data
        })
    }
}

export function getDogName(name) {
    return async function (dispatch) {
        try{
            const json = await axios.get(`${url}/dogs?name=${name}`)
            return dispatch({
                type: GET_DOG_NAME,
                payload: json.data
            })
        } catch(error){
            alert('The dog could not be found')
        }
    }
}

export function getDog(id) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`${url}/dogs/${id}`);
            return dispatch({
                type: GET_DOG_DETAIL,
                payload: json.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}



export function postDog (data){
    try{
        return async function () {
            const posted = await axios.post(`${url}/dogs`, data);
            return posted
        }
    } catch(error) {
        alert('The dog could not be created')
    }
}

export function filterByHeight(payload){
    return {
        type: 'FILTER_BY_HEIGHT',
        payload
    }
}
 
export function filterByName(payload) {
    return { 
        type: FILTER_BY_NAME,
        payload
    }
}

export function filterByWeight(payload) {
    return { 
        type: FILTER_BY_WEIGHT,
        payload
    }
}

export function FilterByTemperament(payload) {
    return{
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
}

export function filterCreatedDog (payload) {
        return {
        type: FILTER_CREATED_DOG,
        payload
    }
}

export function clearDetail ()  {
    return {
        type : CLEAR_DETAIL
    }
}