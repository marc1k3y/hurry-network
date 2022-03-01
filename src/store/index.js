import { createStore, combineReducers } from "redux"
import { CartReducer } from "./cart/reducer"

const rootReducer = combineReducers({
  cart: CartReducer
})

export const store = createStore(rootReducer)