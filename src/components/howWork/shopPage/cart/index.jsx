import cn from "./style.module.css"
import { useSelector, useDispatch } from "react-redux"
import { clearCartAction } from "../../../../store/cart/actions"

export const Cart = ({ visible }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)

  function clearCart() {
    dispatch(clearCartAction())
  }
  return (
    <div className={cn.cartWrapper} style={{ display: visible ? "flex" : "none" }}>
      <div className={cn.title}>Cart</div>
      <div className={cn.clear} onClick={clearCart}>clear</div>
      <div className={cn.posList}>
        {cart.length > 0
          ? cart.map(pos =>
            <div key={pos.id} className={cn.posCard}>
              <div>{pos.title}</div>
              <div>{pos.option}</div>
            </div>)
          : <div className={cn.cartEmpty}>Cart empty</div>}
      </div>
      <div className={cn.total}>Total:</div>
      <div className={cn.time}>
        Pick up at:
        <input type="time" />
      </div>
      <button>Order</button>
    </div>
  )
}