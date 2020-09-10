import {combineReducers} from 'redux'
import coctails from './coctail-reducer'
import ingridients from './ing-reducer'

const rootReducer = combineReducers({
    coctails,
    ingridients
})

export default rootReducer