import cn from "./style.module.css"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

export const CafeList = () => {
  const { cafes } = useSelector(state => state.cafes)

  return (
    <div className={cn.cafeListWrapper}>
      <h3>Cafe list</h3>
      <input type="text" />
      <div className={cn.localFilter}>
        Looking local cafes
        <input type="checkbox" />
      </div>
      <div className={cn.list}>
        {cafes.map(cafe =>
          <div key={cafe.id} className={cn.cafeCard}>
            <NavLink to={`/shopPage/${cafe.id}`}>{cafe.title}</NavLink>
            <div>rating: {cafe.rating}</div>
            <div>{cafe.addr.country}, {cafe.addr.city}</div>
          </div>)}
      </div>
    </div>
  )
}