import { actionTypes } from "../actions"

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
