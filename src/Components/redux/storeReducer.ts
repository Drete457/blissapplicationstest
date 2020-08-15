import { actionFormat } from "../../Type/actionformat"

export interface pinsState {
    pins: string[],
}

const inicialState = {
    pins: ["11111"],
}

export const save = (state: pinsState = inicialState, action: actionFormat) => {
    switch (action.type) {
        case "ADD_PINS": {
            return { ...state, pins: [...state.pins, action.payload] }
        }
    }
}
