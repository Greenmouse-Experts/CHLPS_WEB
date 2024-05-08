import { useQuery } from "@tanstack/react-query";
import { getMembershipPlans } from "../../services/api/membership-api";
import { useParams } from "react-router-dom";
import { MembershipItem } from "../../contracts/membership";
import JoinMembershipIndex from "../../lib/modules/user/membership/join-membership";

const JoinMembership = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["membership-plans"],
    queryFn: getMembershipPlans,
  });
  const currentPlan = data?.filter(
    (where: MembershipItem) => where.id.toString() === `${id}`
  );
  return (
    <div>
      {!isLoading && !!currentPlan?.length && (
        <div>
          <JoinMembershipIndex item={currentPlan[0]} />
        </div>
      )}
    </div>
  );
};

export default JoinMembership;
