import { SET_MACHINE } from './machineConstants';

var initialState = [];

const machineReducer = (state = initialState, action) => {
    var { type, payload } = action;
    switch (type) {
        case SET_MACHINE:
            return [...payload.machines]
        default:
            return state
    }
}

export default machineReducer
