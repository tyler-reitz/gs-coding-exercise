import { combineReducers } from "redux"

import assessment from "./assessment"
import currentStep from "./currentStep"
import score from "./scoreReducer"

export default combineReducers({
  assessment,
  currentStep,
  score
})
