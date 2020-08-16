import { actionSaveFormat, actionDeleteFormat, actionUpdateFormat } from "../../Type/actionformat"

export interface pinsState {
    pins: object[],
};

const inicialState = {
    pins: [],
};

export const action = (state: pinsState = inicialState, action: actionSaveFormat | actionUpdateFormat | actionDeleteFormat) => {
    switch (action.type) {
        case "ADD_PINS": {
            return { ...state, pins: [...state.pins, action.payload] };
        }
        case "UPDATE": {
            const pinValues = Object.values(action.payload);
            let index = 0;

            state.pins.filter((value, i) => {
                const values = Object.values(value);
          
                if (values[1] === pinValues[1] && values[2] === pinValues[2] && values[3] === pinValues[3] && values[4] === pinValues[4] && values[5] === pinValues[5]) {
                    index = i
                }
          
                return null;
            });
       
            state.pins[index] = action.payload;
            return { ...state, pins: [...state.pins] };
        }
        case "DELETE": {
            const index = state.pins.indexOf(action.payload);
            state.pins.splice(index, 1);
            return { ...state, pins: [...state.pins] };
        }
        default:
            return state;
    }
};
