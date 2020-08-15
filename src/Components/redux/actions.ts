import { actionFormat } from "../../Type/actionformat"

export const addPins = (pins: object): actionFormat => ({
    type: "ADD_PINS", payload: pins
  })