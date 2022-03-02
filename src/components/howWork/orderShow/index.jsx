import cn from "./style.module.css"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import tgJet from "../../../assets/telegram-jet.svg"
import shopUnfill from "../../../assets/shop-unfilled.svg"
import shopFill from "../../../assets/shop-filled.svg"

export const OrderShow = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const cafeId = parseInt(pathname.split("/")[2])
  const [fill, setFill] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFill(true)
      setTimeout(() => {
        navigate(`/cafePhone/${cafeId}`)
      }, 750)
    }, 3250)
  }, [navigate, cafeId])
  return (
    <div className={cn.orderShowWrapper}>
      <div className={cn.order}>
        <img src={tgJet} alt="order" />
      </div>
      <div className={cn.cafe}>
        <img src={fill ? shopFill : shopUnfill} alt="cafe" />
      </div>
    </div>
  )
}