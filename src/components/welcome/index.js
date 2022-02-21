import cn from "./style.module.css"
import arrow from "../../assets/big-top-arrow.svg"

export const Welcome = () => {
  return (
    <div className={cn.welcomeWrapper}>
      <div className={cn.switchClients}>
        <a href="https://marc1k3y.github.io/hurry-user/" className={cn.guest}>i am guest</a>
        <a href="https://marc1k3y.github.io/hurry-business/" className={cn.cafe}>i am cafe</a>
      </div>
      <div className={cn.content}>
        <img src={arrow} alt="arrow" />
        <div className={cn.welcome}>Welcome!</div>
      </div>
    </div>
  )
}