import { actionTypes } from "../actions"
import { incrementStep } from "../utils"

export default (state = 0, { 
  type,
  payload: { step, } = {}
} = {}) => {
  switch (type) {
    case actionTypes.SET_CURRENT_STEP:
      return step
    default:
      return state
  }
}
