import { FC } from "react"
import { CertificationItem } from "../../../../../contracts/certification"
import { PiCertificate } from "react-icons/pi"

interface Props{
    items: CertificationItem[]
}
const CertificationList:FC<Props> = ({items}) => {
  return (
    <div className="lg:grid grid-cols-2 gap-4">
        {
            items.map((item) => (
                <div className="flex items-center cursor-pointer hover:scale-[1.02] duration-100 p-4 rounded-lg bg-primary text-white gap-x-2 border border-gray-100 drop-shadow-sm">
                    <PiCertificate className="text-3xl"/>
                    <p className="fw-500 syne lg:text-lg">{item.title}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CertificationList