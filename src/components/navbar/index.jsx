import cn from "./style.module.css"
import { Link, useLocation } from "react-router-dom"
import { links } from "../../links"

export const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <div className={cn.navbarWrapper}>
      {links.map(link =>
        <Link
          style={{ backgroundColor: pathname === link.to && "goldenrod", color: pathname === link.to && "gray" }}
          key={link.title}
          to={link.to}>
          {link.title}
        </Link>)}
    </div>
  )
}