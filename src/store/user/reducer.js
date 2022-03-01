import { SET_NAME, UZE_VOTE } from "./actions"

const defaultState = {
  uName: "",
  votes: 2
}

export function UserReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, uName: action.payload }
    case UZE_VOTE:
      return { ...state, votes: state.votes - 1 }
    default:
      return state
  }
}