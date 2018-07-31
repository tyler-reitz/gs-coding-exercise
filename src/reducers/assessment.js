import { actionTypes } from "../actions"

export default (state = [], action = {}) => {
  switch (action.type) {
    case actionTypes.LOAD_ASSESSMENT:
      return action.payload
    default:
      return state
  }
}
