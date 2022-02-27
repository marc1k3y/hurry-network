import cn from "./style.module.css"
import leftArrow from "../../../assets/left-arrow-tg.svg"
import logo from "../../../assets/hurry2.svg"
import option from "../../../assets/triple-dots.svg"

export const CafePhone = () => {
  return (
    <div className={cn.CafePhoneWrapper}>
      <div className={cn.tgHeader}>
        <div className={cn.left}>
          <div className={cn.arrow}>
            <img src={leftArrow} alt="back" />
          </div>
          <div className={cn.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={cn.userName}>
            <div className={cn.mainName}>Hurry Bot</div>
            <div className={cn.secName}>bot</div>
          </div>
        </div>
        <div className={cn.right}>
          <img src={option} alt="option" />
        </div>
      </div>
      <div className={cn.tgChat}>
        <div className={cn.message}>
          hello
        </div>
      </div>
      <div className={cn.tgFooter}>
        <div className={cn.smileBtn}></div>
        <div className={cn.messageInput}></div>
        <div className={cn.attachFile}></div>
        <div className={cn.mic}></div>
      </div>
    </div>
  )
}