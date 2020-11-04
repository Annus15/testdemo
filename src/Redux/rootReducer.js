import {combineReducers} from "redux";
import machineReducer from '../Redux/machines/machineReducer'

var rootReducer = combineReducers({
    machines : machineReducer
})

export default rootReducer;