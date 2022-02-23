import cn from "./style.module.css"

export const About = () => {
  return (
    <div className={cn.aboutWrapper}>
      <div className={cn.creatingIdea}>
        Creating idea
      </div>
      <div className={cn.aboutText}>
        Hey! Once i'm watched how barista take an order
        over the phone during a stream bath. After that
        i was obliged to make this application. I hope
        six years of my experience in coffee shops and
        restaurants have not been in vain and it will
        really become an assistant for establishments
        and guests!
      </div>
      <div className={cn.whatIs}>
        What is Hurry?
      </div>
      <div className={cn.whatCanText}>
        <ul>
          <li>worldwire network online coffee shops, cafe and restaurants</li>
          <li>guests can vote up and down</li>
          <li>takes orders with exact time</li>
          <li>telegram bot instantly transfers the order from the guest
            to the institution
          </li>
          <li>the establishment may limit the guests who can order</li>
        </ul>
      </div>
    </div>
  )
}