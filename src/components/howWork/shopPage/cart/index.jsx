import cn from "./style.module.css"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { clearCartAction } from "../../../../store/cart/actions"
import { sendOrderAction } from "../../../../store/order/actions"
import { useState } from "react"

export const Cart = ({ visible }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { uName } = useSelector(state => state.user)
  const { cart } = useSelector(state => state.cart)
  const [pUpTime, setPUpTime] = useState("")
  let total = 0
  let currency = ""

  function clearCart() {
    dispatch(clearCartAction())
  }

  function sendOrder() {
    const order = {
      uName, pUpTime, cart, total, currency
    }
    dispatch(sendOrderAction(order))
    navigate("/orderShow")
    clearCart()
  }

  return (
    <div className={cn.cartWrapper} style={{ display: visible ? "flex" : "none" }}>
      <div className={cn.title}>Cart</div>
      <div className={cn.clear} onClick={clearCart}>clear</div>
      <div className={cn.posList}>
        {cart.length > 0
          ? cart.map((pos, index) =>
            <div key={index} className={cn.posCard}>
              <div>{pos.title}</div>
              <div>{pos.option}</div>
              <div className={cn.hideDiv}>
                {total += parseInt(pos.price)}
                {currency = pos.price.split(parseInt(pos.price))}
              </div>
            </div>)
          : <div className={cn.cartEmpty}>Cart empty</div>}
      </div>
      <div className={cn.total}>Total: {total}{currency}</div>
      <div className={cn.time}>
        Pick up at:
        <input required type="time" value={pUpTime} onChange={(e) => setPUpTime(e.target.value)} />
      </div>
      <button onClick={sendOrder}>Order</button>
    </div>
  )
}