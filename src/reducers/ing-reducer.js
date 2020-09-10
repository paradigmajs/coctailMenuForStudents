import {FETCH_INGRIDIENT} from '../actions'

export default function (state=[], action){
    switch (action.type){
        case FETCH_INGRIDIENT:
            return [action.payload.data.ingredients[0]]
    }
    return state
}