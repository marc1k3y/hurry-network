import cn from "./style.module.css"
import { useState } from "react"
import arrow from "../../assets/big-top-arrow.svg"

export const Welcome = () => {
  const [rotate, setRotate] = useState(10)
  console.log(rotate);
  return (
    <div className={cn.welcomeWrapper}>
      <div className={cn.switchClients}>
        <div className={cn.iam}>i am</div>
        <div className={cn.choice}>
          <a href="https://marc1k3y.github.io/hurry-user/"
            className={cn.guest}
            onMouseEnter={() => setRotate(-10)}
            onMouseLeave={() => setRotate(10)}>guest</a>
          <a href="https://marc1k3y.github.io/hurry-business/"
            className={cn.cafe}
            onMouseEnter={() => setRotate(30)}
            onMouseLeave={() => setRotate(10)}>cafe</a>
        </div>
      </div>
      <div className={cn.content}>
        <img src={arrow} alt="arrow"
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </div>
    </div>
  )
}