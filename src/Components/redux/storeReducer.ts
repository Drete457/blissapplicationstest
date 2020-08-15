import { actionFormat } from "../../Type/actionformat"

export interface pinsState {
    pins: object[],
}

const inicialState = {
    pins: [],
}

export const save = (state: pinsState = inicialState, action: actionFormat) => {
    switch (action.type) {
        case "ADD_PINS": {
            return { ...state, pins: [...state.pins, action.payload] }
        }
        default:
            return state
    }
}
