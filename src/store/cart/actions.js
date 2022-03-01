export const PUSH_TO_CART = "PUSH_TO_CART"
export const POP_FROM_CART = "POP_FROM_CART"
export const CLEAR_CART = "CLEAR_CART"

export const pushToCartAction = (payload) => ({ type: PUSH_TO_CART, payload })
export const popFromCartAction = (payload) => ({ type: POP_FROM_CART, payload })
export const clearCartAction = () => ({ type: CLEAR_CART })