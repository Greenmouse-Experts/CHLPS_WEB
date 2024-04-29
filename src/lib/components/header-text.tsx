import { FC } from "react"

interface Props{
    text: string
}
const HeaderText:FC<Props> = ({text}) => {
  return (
    <div className="flex items-center gap-x-2">
        <span className="w-5 h-5 circle bg-circle-grad"></span>
        <p className="">{text}</p>
    </div>
  )
}

export default HeaderText