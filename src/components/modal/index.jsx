import cn from "./style.module.css"
import logo from "../../assets/hurry2.svg"

export const Modal = ({ visible }) => {
  return (
    <div className={cn.modalWrapper} style={{ display: visible ? "flex" : "none" }}>
      <div className={cn.modalContent}>
        <img src={logo} alt="logo" />
        <div className={cn.loader}>
          <div>Loading..</div>
          <div className={cn.loaderLineWrap}>
            <div className={cn.loaderLine}></div>
          </div>
        </div>
      </div>
    </div>
  )
}