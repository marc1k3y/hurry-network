import cn from "./style.module.css"
import { Routes, Route, Link } from "react-router-dom"
import { CafeList } from "./cafeList"
import { ShopPage } from "./shopPage"

export const HowWork = () => {
  return (
    <div className={cn.howWorkWrapper}>
      <h2>How it work?</h2>
      <div className={cn.helps}></div>
      <div className={cn.phone}>
        <div className={cn.display}>
          <Routes>
            <Route path="*" element={<CafeList />} />
            <Route path="/shopPage/:id" element={<ShopPage />} />
          </Routes>
        </div>
        <div className={cn.homeBtn}>
          <Link to="/" className={cn.btnSquare}></Link>
        </div>
      </div>
    </div>
  )
}