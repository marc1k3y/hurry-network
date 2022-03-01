import { SEND_ORDER } from "./actions"

const defaultState = {
  order: {}
}

export function OrderReducer(state = defaultState, action) {
  switch (action.type) {
    case SEND_ORDER:
      return { ...state, order: action.payload }
    default:
      return state
  }
}