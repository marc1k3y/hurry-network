import cn from "./style.module.css"
import { useLocation } from "react-router-dom"
import like from "../../../../assets/like.svg"
import dislike from "../../../../assets/dislike.svg"
import address from "../../../../assets/address.svg"
import { useDispatch, useSelector } from "react-redux"
import { pushToCartAction } from "../../../../store/cart/actions"
import { Helper } from "../../helper"
import { useState } from "react"
import { uzeVoteAction } from "../../../../store/user/actions"

export const Shop = ({ visible, cartSwitch }) => {

  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const cafeId = parseInt(pathname.split("/")[2])
  const { votes } = useSelector(state => state.user)
  const { cafes } = useSelector(state => state.cafes)
  const [rateCntrl, setRateCntrl] = useState(0)
  const [helpText, setHelpText] = useState("Please choose one or more drinks")

  const CartRedirect = () => {
    return (
      <div className={cn.cartRedirect}>
        Please go to
        <button onClick={() => cartSwitch(false)}>cart</button>
      </div>
    )
  }

  function pushToCart(id, title, option, price) {
    dispatch(pushToCartAction({ id, title, option, price }))
    setHelpText(CartRedirect)
  }

  function downRate() {
    setRateCntrl(rateCntrl - 1)
    dispatch(uzeVoteAction())
  }

  function upRate() {
    setRateCntrl(rateCntrl + 1)
    dispatch(uzeVoteAction())
  }

  return (
    cafes.map(cafe =>
      cafeId === cafe.id &&
      <div key={cafe.title} className={cn.shopWrapper} style={{ display: visible ? "flex" : "none" }}>
        <div className={cn.votes}>{votes}</div>
        <div className={cn.title}>{cafe.title}</div>
        <div className={cn.rateControl}>
          {votes > 0 && <img src={dislike} alt=":(" onClick={downRate} />}
          RATE: {cafe.rating + rateCntrl}
          {votes > 0 && <img src={like} alt=":)" onClick={upRate} />}
        </div>
        <div className={cn.addr}>
          <img src={address} alt="addr" />
          <div>
            {cafe.addr.country + " "}
            {cafe.addr.city}
            <br />
            {cafe.addr.street}
            {cafe.addr.build}
          </div>
        </div>
        <Helper visible={true}>
          {helpText}
        </Helper>
        <div className={cn.menu}>
          {cafe.menu.map(pos =>
            <div key={pos.id} className={cn.posCard}>
              <div className={cn.posTitle}>{pos.title}</div>
              <div>{pos.option}</div>
              <div>{pos.price}</div>
              <button
                onClick={() => pushToCart(pos.id, pos.title, pos.option, pos.price)}>
                to cart
              </button>
            </div>
          )}
        </div>
      </div>)
  )
}