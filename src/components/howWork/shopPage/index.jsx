import cn from "./style.module.css"
import { Shop } from "./shop"
import { Cart } from "./cart"
import { useState } from "react"

export const ShopPage = () => {
  const [display, setDisplay] = useState(true)
  return (
    <div className={cn.shopPageWrapper}>
      <div className={cn.switch}>
        <div
          className={cn.shopSwitch}
          onClick={() => setDisplay(true)}
          style={{ backgroundColor: display ? "goldenrod" : "white", color: display ? "white" : "gray" }}>
          shop
        </div>
        <div
          className={cn.cartSwitch}
          onClick={() => setDisplay(false)}
          style={{ backgroundColor: !display ? "goldenrod" : "white", color: !display ? "white" : "gray" }}>
          cart
        </div>
      </div>
      <Shop visible={display} />
      <Cart visible={!display} />
    </div>
  )
}