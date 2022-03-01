import cn from "./style.module.css"

export const PhoneModal = ({ visible, children }) => {
  return (
    <div className={cn.phoneModalWrapper} style={{ display: visible ? "flex" : "none" }}>
      <div className={cn.phoneModalContent}>
        {children}
      </div>
    </div>
  )
}