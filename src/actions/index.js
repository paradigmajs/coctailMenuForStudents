import axios from 'axios'
export const FETCH_COCTAIL = 'FETCH_COCTAIL'

export function fetchCoctail(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
    const request = axios.get(url)
    console.log(request)
    return{
        type: FETCH_COCTAIL,
        payload: request
    }
}
