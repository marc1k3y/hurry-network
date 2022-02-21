import cn from "./style.module.css"
import { useState } from "react"
import arrow from "../../assets/big-top-arrow.svg"
import { Modal } from "../modal"

export const Welcome = () => {
  const [rotate, setRotate] = useState(10)
  const [modal, setModal] = useState(false)
  function direct(href) {
    setTimeout(() => {
      window.location.href = href
    }, 2000)
    setTimeout(() => {
      setModal(true)
    }, 500)
  }
  return (
    <div className={cn.welcomeWrapper}>
      <div className={cn.switchClients}>
        <div className={cn.iam}>i am</div>
        <div className={cn.choice}>
          <span
            className={cn.guest}
            onClick={() => direct("https://marc1k3y.github.io/hurry-user/")}
            onMouseEnter={() => setRotate(-10)}
            onMouseLeave={() => setRotate(10)}>guest</span>
          <span
            className={cn.cafe}
            onClick={() => direct("https://marc1k3y.github.io/hurry-business/")}
            onMouseEnter={() => setRotate(30)}
            onMouseLeave={() => setRotate(10)}>cafe</span>
        </div>
      </div>
      <div className={cn.content}>
        <img src={arrow} alt="arrow"
          style={{ transform: `rotate(${rotate}deg)` }} />
      </div>
      <Modal visible={modal} />
    </div>
  )
}