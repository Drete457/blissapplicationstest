import { actionFormat } from "../../Type/actionformat"

export interface pinsState {
    pins: object[],
}

const inicialState = {
    pins: [{
        one: 11111,
        two: 11111,
        three: 11111,
        four: 11111,
        five: 11111,
      }],
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
