import axios from 'axios'
import {API} from '../config/url'
export const FETCH_COCTAIL = 'FETCH_COCTAIL'

export function fetchCoctail(name, typeOf){
    let url = ''
    if(typeOf === 'getAll'){
        url = API+'filter.php?c=Cocktail'
    }
    if(typeOf === "fetchByAlc"){
        url = API+'filter.php?a='+name 
    }
    if (typeOf==="filterByName"){
        url = API+'search.php?s='+name    
    }
    const request = axios.get(url)
    return{
        type: FETCH_COCTAIL,
        payload: request
    }
}

export const FETCH_INGRIDIENT = "FETCH_INGRIDIENT"
export function fetchByIngridient(name){
    const url = API+'search.php?i='+name
    const request = axios.get(url)
    console.log(request)
    return{
        type: FETCH_INGRIDIENT,
        payload: request
    }
}