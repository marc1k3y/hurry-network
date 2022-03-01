import cn from "./style.module.css"
import { useLocation } from "react-router-dom"
import like from "../../../../assets/like.svg"
import dislike from "../../../../assets/dislike.svg"
import address from "../../../../assets/address.svg"
import { useDispatch, useSelector } from "react-redux"
import { pushToCartAction } from "../../../../store/cart/actions"

export const Shop = ({ visible }) => {

  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const cafeId = parseInt(pathname.split("/")[2])
  const { cafes } = useSelector(state => state.cafes)

  function pushToCart(id, title, option, price) {
    dispatch(pushToCartAction({ id, title, option, price }))
  }

  return (
    cafes.map(cafe =>
      cafeId === cafe.id &&
      <div key={cafe.title} className={cn.shopWrapper} style={{ display: visible ? "flex" : "none" }}>
        <div className={cn.votes}>2</div>
        <div className={cn.title}>{cafe.title}</div>
        <div className={cn.rateControl}>
          <img src={dislike} alt=":(" />
          RATE: {cafe.rating}
          <img src={like} alt=":)" />
        </div>
        <div className={cn.addr}>
          <img src={address} alt="addr" />
          <div>
            {cafe.addr.country}
            {cafe.addr.city}
            <br />
            {cafe.addr.street}
            {cafe.addr.build}
          </div>
        </div>
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