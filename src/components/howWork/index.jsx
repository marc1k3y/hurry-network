import cn from "./style.module.css"
import { Routes, Route, Link } from "react-router-dom"
import { CafeList } from "./cafeList"
import { ShopPage } from "./shopPage"
import { useState } from "react"
import { CafePhone } from "./cafePhone"

export const HowWork = () => {
  const [show, setShow] = useState(false)
  return (
    <div className={cn.howWorkWrapper}>
      <h2 onClick={() => setShow(!show)} style={{ animation: show && "none" }}>{`${show ? "Hide" : "How it work?"}`}</h2>
      <div className={cn.helps}></div>
      <div className={cn.phone}
        style={{ display: show ? "flex" : "none" }}>
        <div className={cn.phoneHeader}>
          <div className={cn.camera}>
            <div className={cn.lens}></div>
          </div>
          <div className={cn.dynamic}></div>
        </div>
        <div className={cn.display}>
          <Routes>
            <Route path="*" element={<CafeList />} />
            <Route path="/shopPage/:id" element={<ShopPage />} />
            <Route path="/cafePhone/:id" element={<CafePhone />} />
          </Routes>
        </div>
        <div className={cn.homeBtn}>
          <Link to="/" className={cn.btnSquare}></Link>
        </div>
      </div>
    </div>
  )
}