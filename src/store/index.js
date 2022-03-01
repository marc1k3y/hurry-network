import { createStore, combineReducers } from "redux"
import { UserReducer } from "./user/reducer"
import { CartReducer } from "./cart/reducer"
import { OrderReducer } from "./order/reducer"
import { CafesReducer } from "./cafes/reducer"

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  order: OrderReducer,
  cafes: CafesReducer
})

export const store = createStore(rootReducer)