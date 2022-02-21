import cn from "./style.module.css"

export const Modal = ({ visible }) => {
  return (
    <div className={cn.modalWrapper} style={{ display: visible ? "flex" : "none" }}>
      <div className={cn.modalContent}>
        <div>Have</div>
        <div>a</div>
        <div>good</div>
        <div>day</div>
      </div>
    </div>
  )
}