import { CLEAR_CART, POP_FROM_CART, PUSH_TO_CART } from "./actions"

const defaultState = {
  cart: []
}

export function CartReducer(state = defaultState, action) {
  switch (action.type) {
    case PUSH_TO_CART:
      return { ...state, state: state.cart.push(action.payload) }
    case POP_FROM_CART:
      return { ...state, cart: state.cart.pop(action.payload) }
    case CLEAR_CART:
      return { ...state, cart: [] }
    default:
      return state
  }
}