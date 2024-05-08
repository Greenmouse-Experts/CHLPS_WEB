import { FC } from "react";
import { MembershipItem } from "../../../../../contracts/membership";
import PrimaryInfo from "./primary-info";
import LocationInfo from "./location-info";
import PaymentInfo from "./payment-info";
import CheckAccepts from "./check-accepts";
import Button from "../../../../components/Button";

interface Props {
  item: MembershipItem;
}
const JoinMembershipIndex: FC<Props> = ({ item }) => {
  return (
    <div className="bg-white shadow-lg p-5 lg:p-8 rounded-lg">
      <div>
        <p className="text-xl lg:text-3xl fw-500">Join {item.name}</p>
        <p className="mt-2">
          Fill up the field with your correct information to join the membership
          plan.
        </p>
      </div>
      <div>
        <div>
            <PrimaryInfo/>
        </div>
        <div>
            <LocationInfo/>
        </div>
        <div>
            <PaymentInfo firstPay={item.first_time_amount} contPay={item.recurring_amount}/>
        </div>
        <div>
          <CheckAccepts/>
        </div>
        <div className="mt-12">
          <Button title={'Process Subscription'}/>
        </div>
      </div>
    </div>
  );
};

export default JoinMembershipIndex;
