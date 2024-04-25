import { FC } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface Props{
    name: string
    icon?: JSX.Element;
}
const BtnContent:FC<Props> = ({name, icon}) => {
  return (
    <div className="flex items-center gap-x-3">
        {name}
        {icon? icon : <HiOutlineArrowNarrowRight/>}
    </div>
  )
}

export default BtnContent