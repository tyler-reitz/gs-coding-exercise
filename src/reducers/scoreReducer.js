import { actionTypes } from "../actions"

export default (state = [], action = {}) => {
  switch (action.type) {
    case actionTypes.SET_SCORE:
      const { payload: { step, value } } = action
      const newState = [...state]
      newState[step] = value
      return newState
    default:
      return state
  }
}
