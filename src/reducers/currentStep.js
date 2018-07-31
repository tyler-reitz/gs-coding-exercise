import { actionTypes } from "../actions"

export default (state = 0, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_STEP:
      return action.payload.step
    default:
      return state
  }
}
