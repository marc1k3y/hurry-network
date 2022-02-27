import cn from "./style.module.css"
import { useLocation } from "react-router-dom"
import like from "../../../../assets/like.svg"
import dislike from "../../../../assets/dislike.svg"
import address from "../../../../assets/address.svg"

export const Shop = ({ visible }) => {

  const { pathname } = useLocation()
  const cafeId = parseInt(pathname.split("/")[2])

  const cafes = [
    {
      id: 2, title: "Super Bean", rating: 10, addr: { country: "Russia ", city: "Voronezh", street: "Kosmonavtov ", build: "17b" },
      menu: [
        { id: 1, title: "Americano", option: "250ml", price: "100rub" },
        { id: 2, title: "Cappucino", option: "250ml", price: "120rub" },
        { id: 3, title: "Mocha", option: "350ml", price: "170rub" },
        { id: 4, title: "Latte", option: "350ml", price: "160rub" },
        { id: 1, title: "Americano", option: "250ml", price: "100rub" },
        { id: 2, title: "Cappucino", option: "250ml", price: "120rub" },
        { id: 3, title: "Mocha", option: "350ml", price: "170rub" },
        { id: 4, title: "Latte", option: "350ml", price: "160rub" }]
    },
    {
      id: 4, title: "Pikale", rating: 9, addr: { country: "Canada ", city: "Ottawa", street: "Portage Avenue ", build: "7" },
      menu: [{ id: 1, title: "Americano", option: "350ml", price: "12$" }]
    },
    {
      id: 1, title: "Zaryad", rating: 8, addr: { country: "Russia ", city: "Voronezh", street: "Komissarzhevskoi ", build: "8" },
      menu: [{ id: 1, title: "Americano", option: "250ml", price: "110rub" }]
    },
    {
      id: 3, title: "Starbins", rating: 7, addr: { country: "America ", city: "New York", street: "Park Avenue ", build: "1" },
      menu: [{ id: 1, title: "Americano", option: "350ml", price: "16$" }]
    }
  ]

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
              <button>to cart</button>
            </div>
          )}
        </div>
      </div>)
  )
}