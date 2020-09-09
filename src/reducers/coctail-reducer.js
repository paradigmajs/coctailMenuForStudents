import {FETCH_COCTAIL} from '../actions'

export default function (state=[], action){
    switch (action.type){
        case FETCH_COCTAIL:
            return [action.payload.data.drinks]
    }
    return state
}