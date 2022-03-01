import cn from "./style.module.css"
import helper from "../../../assets/help.svg"

export const Helper = ({ visible, children }) => {
  return (
    <div className={cn.helperWrapper} style={{ display: visible ? "flex" : "none" }}>
      <img src={helper} alt="help" />
      {children}
    </div>
  )
}