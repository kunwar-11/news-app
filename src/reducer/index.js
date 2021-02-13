import {combineReducers} from 'redux'
import newsReducer from './newsReducer'

const allReducer = combineReducers({
    news : newsReducer
})

export default allReducer