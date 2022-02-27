import cn from "./style.module.css"

export const Cart = ({ visible }) => {
  return (
    <div className={cn.cartWrapper} style={{ display: visible ? "flex" : "none" }}>
      <div className={cn.title}>Cart</div>
      <div className={cn.clear}>clear</div>
      <div className={cn.posList}></div>
      <div className={cn.total}>Total:</div>
      <div className={cn.time}>
        Pick up at:
        <input type="time" />
      </div>
      <button>Order</button>
    </div>
  )
}