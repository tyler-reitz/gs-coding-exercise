import { createStore } from "redux"

import rootReducer from "./reducers"

export const storeFactory = (initialState = {}) =>
  createStore(rootReducer, initialState)
