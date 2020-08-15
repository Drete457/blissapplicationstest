import { actionSaveFormat, actionDeleteFormat } from "../../Type/actionformat"

export interface pinsState {
    pins: object[],
}

const inicialState = {
    pins: [],
}

export const action = (state: pinsState = inicialState, action: actionSaveFormat | actionDeleteFormat ) => {
    switch (action.type) {
        case "ADD_PINS": {
            return { ...state, pins: [...state.pins, action.payload] };
        } 
        case "DELETE": {
            const index = state.pins.indexOf(action.payload);
            state.pins.splice(index, 1);
            return { ...state, pins: [...state.pins] };
        }
        default:
            return state
    }
}
