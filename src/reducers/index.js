import { combineReducers } from "redux"

import assessment from "./assessment"
import currentStep from "./currentStep"

export default combineReducers({
  assessment,
  currentStep
})
