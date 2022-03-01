import { createStore, combineReducers } from "redux"
import { CartReducer } from "./cart/reducer"
import { UserReducer } from "./user/reducer"

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer
})

export const store = createStore(rootReducer)