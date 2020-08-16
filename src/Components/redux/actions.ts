import { actionSaveFormat, actionDeleteFormat } from "../../Type/actionformat"

export const addPin = (pins: object): actionSaveFormat => ({
  type: "ADD_PINS", payload: pins
});

export const deletePin = (pins: object): actionDeleteFormat => ({
  type: "DELETE", payload: pins
});
