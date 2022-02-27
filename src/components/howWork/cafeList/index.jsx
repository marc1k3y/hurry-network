import cn from "./style.module.css"
import { NavLink } from "react-router-dom"

export const CafeList = () => {

  const cafeList = [
    { id: 2, title: "Super Bean", rating: 10, addr: { country: "Russia", city: "Voronezh" } },
    { id: 4, title: "Pikale", rating: 9, addr: { country: "Canada", city: "Ottawa" } },
    { id: 1, title: "Zaryad", rating: 8, addr: { country: "Russia", city: "Voronezh" } },
    { id: 3, title: "Starbins", rating: 7, addr: { country: "America", city: "New York" } }
  ]

  return (
    <div className={cn.cafeListWrapper}>
      <h3>Cafe list</h3>
      <input type="text" />
      <div className={cn.localFilter}>
        Looking local cafes
        <input type="checkbox" />
      </div>
      <div className={cn.list}>
        {cafeList.map(cafe =>
          <div key={cafe.id} className={cn.cafeCard}>
            <NavLink to={`/shopPage/${cafe.id}`}>{cafe.title}</NavLink>
            <div>rating: {cafe.rating}</div>
            <div>{cafe.addr.country}, {cafe.addr.city}</div>
          </div>)}
      </div>
    </div>
  )
}