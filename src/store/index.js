import { createStore, combineReducers } from "redux"
import { UserReducer } from "./user/reducer"
import { CartReducer } from "./cart/reducer"
import { OrderReducer } from "./order/reducer"

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  order: OrderReducer
})

export const store = createStore(rootReducer)