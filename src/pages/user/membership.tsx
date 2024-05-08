import { useQuery } from "@tanstack/react-query";
import HeaderText from "../../lib/components/header-text";
import { getMembershipPlans } from "../../services/api/membership-api";
import { MembershipItem } from "../../contracts/membership";
import { formatAsNgnMoney } from "../../lib/utils/helpers";
import { useNavigate } from "react-router-dom";

const UserMembership = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["membership-plans"],
    queryFn: getMembershipPlans,
  });
  const navigate = useNavigate();
  const bgs: string[] = [
    "bg-green-100",
    "bg-blue-100",
    "bg-orange-100",
    "bg-purple-100",
  ];
  const bds: string[] = [
    "border-green-700",
    "border-blue-700",
    "border-orange-700",
    "border-purple-700",
  ];
  return (
    <div>
      <div className="h-[220px] rounded-lg drop-shadow-md bg-plans bg-cover bg-center">
        <p className="pl-6 pt-6 fw-600 text-white lg:text-3xl">
          Join Our Membership Plans
        </p>
      </div>
      <div className="drop-shadow-md bg-white p-4 lg:pt-5 lg:px-7 mt-6 rounded-lg">
        <div>
          <div className="fw-600 lg:text-lg text-primary">
            <HeaderText text="Membership Plans" />
          </div>
          <p className="fs-500 fw-500">
            Make a pick from the variety of membership plans we offer.
          </p>
        </div>
        <div className="grid gap-4 mt-4">
          {!isLoading &&
            !!data?.length &&
            data?.map((item: MembershipItem, index: number) => {
              const colorIndex = index % bgs.length;
              const borderIndex = index % bds.length;
              const color = bgs[colorIndex];
              const bord = bds[borderIndex];
              return (
                <div
                  key={index}
                  className={`border-l-[3px] p-4 ${bord} cursor-pointer ${color} hover:scale-x-[1.01] hover:sahdow-md duration-100`}
                  onClick={() => navigate(`/user/plans/${item.id}`)}
                >
                  <p className="fw-500 lg:text-lg">{item.name}</p>
                  <p className="lg:text-lg fw-600 syne">
                    {formatAsNgnMoney(item.first_time_amount)}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default UserMembership;
