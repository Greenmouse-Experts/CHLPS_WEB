import { FC } from "react";
import { formatAsNgnMoney } from "../../../../utils/helpers";

interface Props{
    firstPay: string;
    contPay: string;
}
const PaymentInfo:FC<Props> = ({firstPay, contPay}) => {
  return (
    <div className="mt-6">
         <div className="flex items-center text-primary gap-x-2">
        <span className="block bg-primary w-3 h-3 circle"></span>
        <p className="fw-500">Payment Infomation</p>
      </div>
        <div className="px-3 bg-blue-50 mt-2 p-4 rounded shadow">
            <div>
                <p>First Year Payment (Application Fee + Membership Subscription)</p>
                <p className="text-xl fw-600">{formatAsNgnMoney(firstPay)}</p>
            </div>
            <div className="mt-3">
                <p>Subsequent Membership Subscription</p>
                 <p className="fw-600 text-xl">{formatAsNgnMoney(contPay)}</p>
            </div>
            <div className="mt-3">
                <p>Payment Method</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="paypal" className="w-[200px] mt-1" />
            </div>
        </div>
    </div>
  )
}

export default PaymentInfo