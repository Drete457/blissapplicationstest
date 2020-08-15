import { actionFormat } from "../../Type/actionformat"

export const addPin = (pins: string): actionFormat => ({
    type: "ADD_PINS", payload: pins
  })