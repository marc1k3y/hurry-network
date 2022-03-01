import cn from "./style.module.css"
import leftArrow from "../../../assets/left-arrow-tg.svg"
import logo from "../../../assets/hurry2.svg"
import option from "../../../assets/triple-dots.svg"
import wifi from "../../../assets/wifi.svg"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

export const CafePhone = () => {
  const { pathname } = useLocation()
  const { order } = useSelector(state => state.order)
  const { cafes } = useSelector(state => state.cafes)
  const cafeId = parseInt(pathname.split("/")[2])
  const currentCafe = cafes.filter(cafe => cafe.id === cafeId)

  return (
    <div className={cn.CafePhoneWrapper}>
      <div className={cn.cafeName}>
        <img src={wifi} alt="wifi" />
        {currentCafe[0].title} phone
      </div>
      <div className={cn.tgHeader}>
        <div className={cn.left}>
          <div className={cn.arrow}>
            <img src={leftArrow} alt="back" />
          </div>
          <div className={cn.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={cn.userName}>
            <div className={cn.mainName}>Hurry Bot</div>
            <div className={cn.secName}>bot</div>
          </div>
        </div>
        <div className={cn.right}>
          <img src={option} alt="option" />
        </div>
      </div>
      <div className={cn.tgChat}>
        <div className={cn.message}>
          {order.uName} <br />
          Pick up order at: {order.pUpTime}
          <br /> <br />
          {order.cart?.map((pos, index) =>
            <div key={index}>
              <div>{pos.title}: {pos.option}</div>
            </div>)}
          <br />
          <div>Total: {order.total}{order.currency}</div>
        </div>
      </div>
      <div className={cn.tgFooter}>
        <div className={cn.smileBtn}></div>
        <div className={cn.messageInput}></div>
        <div className={cn.attachFile}></div>
        <div className={cn.mic}></div>
      </div>
    </div>
  )
}