import cn from "./style.module.css"
import { useLocation } from "react-router-dom"

export const ShopPage = () => {

  const { pathname } = useLocation()
  const cafeId = parseInt(pathname.split("/")[2])

  const cafes = [
    {
      id: 2, title: "Super Bean", rating: 10, addr: { country: "Russia", city: "Voronezh", street: "Kosmonavtov", build: "17b" },
      menu: [{ id: 1, title: "Americano", option: "250ml", price: "100rub" }]
    },
    {
      id: 4, title: "Pikale", rating: 9, addr: { country: "Canada", city: "Ottawa", street: "Portage Avenue", build: "7" },
      menu: [{ id: 1, title: "Americano", option: "350ml", price: "12$" }]
    },
    {
      id: 1, title: "Zaryad", rating: 8, addr: { country: "Russia", city: "Voronezh", street: "Komissarzhevskoi", build: "8" },
      menu: [{ id: 1, title: "Americano", option: "250ml", price: "110rub" }]
    },
    {
      id: 3, title: "Starbins", rating: 7, addr: { country: "America", city: "New York", street: "Park Avenue", build: "1" },
      menu: [{ id: 1, title: "Americano", option: "350ml", price: "16$" }]
    }
  ]

  return (
    <div className={cn.shopPageWrapper}>
      <div className={cn.switch}>
        <div>shop</div>
        <div>cart</div>
      </div>
      {cafes.map(cafe =>
        cafeId === cafe.id &&
        <div key={cafe.title} className={cn.cafeCard}>
          <div className={cn.votes}>2</div>
          <div className={cn.title}>{cafe.title}</div>
          <div className={cn.rateControl}>-{cafe.rating}+</div>
          <div className={cn.addr}>
            {cafe.addr.country}
            {cafe.addr.city}
            {cafe.addr.street}
            {cafe.addr.build}
          </div>
          <div className={cn.menu}>
            {cafe.menu.map(pos =>
              <div key={pos.id} className={cn.posCard}>
                {pos.title}
                {pos.option}
                {pos.price}
              </div>
            )}
          </div>
        </div>)}
    </div>
  )
}