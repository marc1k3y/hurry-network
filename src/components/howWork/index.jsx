import cn from "./style.module.css"
import { Routes, Route, Link } from "react-router-dom"
import { CafeList } from "./cafeList"
import { ShopPage } from "./shopPage"
import { useEffect, useState } from "react"
import { CafePhone } from "./cafePhone"
import { PhoneModal } from "./phoneModal"
import { useDispatch } from "react-redux"
import { setNameAction } from "../../store/user/actions"
import { OrderShow } from "./orderShow"
import { Helper } from "./helper"

export const HowWork = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [phoneModal, setPhoneModal] = useState(false)
  const [uName, setUName] = useState("")

  useEffect(() => {
    show && setPhoneModal(true)
  }, [show])
  return (
    <div className={cn.howWorkWrapper}>
      <h2 onClick={() => setShow(!show)} style={{ animation: show && "none" }}>{`${show ? "Hide" : "How it work?"}`}</h2>
      <div className={cn.helps}></div>
      <div className={cn.phone}
        style={{ display: show ? "flex" : "none" }}>
        <div className={cn.phoneHeader}>
          <div className={cn.camera}>
            <div className={cn.lens}>
              <div className={cn.dot}></div>
            </div>
          </div>
          <div className={cn.dynamic}></div>
        </div>
        <div className={cn.display}>
          <Routes>
            <Route path="*" element={<CafeList />} />
            <Route path="/shopPage/:id" element={<ShopPage />} />
            <Route path="/cafePhone/:id" element={<CafePhone />} />
            <Route path="/orderShow" element={<OrderShow />} />
          </Routes>
          <PhoneModal visible={phoneModal}>
            <Helper visible={true}>Hello, it's simulator, your order will not ship</Helper>
            <div className={cn.modalTitle}>Enter name</div>
            <div className={cn.modalInput}>
              <input type="text" placeholder="Jhon" value={uName.charAt(0).toUpperCase() + uName.slice(1)} onChange={(e) => setUName(e.target.value)} />
            </div>
            <div className={cn.modalBtn}>
              <button
                onClick={() => {
                  if (uName.length > 1) {
                    dispatch(setNameAction(uName))
                    setPhoneModal(false)
                  }
                }}>ok</button>
            </div>
          </PhoneModal>
        </div>
        <Link to="/" className={cn.homeBtn}>
          <div to="/" className={cn.btnSquare}></div>
        </Link>
      </div>
    </div>
  )
}