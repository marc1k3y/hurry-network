import { SET_NAME } from "./actions"

const defaultState = {
  uName: ""
}

export function UserReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, uName: action.payload }
    default:
      return state
  }
}