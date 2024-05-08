import { useQuery } from "@tanstack/react-query";
import HeaderText from "../../lib/components/header-text";
import { getCertification } from "../../services/api/cert-api";
import CertificationList from "../../lib/modules/user/certification/apply/cert-list";

const UserCertication = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["certification"],
    queryFn: getCertification,
  });
  return (
    <div>
      {" "}
      <div>
        <div className="h-[220px] rounded-lg drop-shadow-md bg-cert bg-cover bg-center">
          <p className="pl-6 pt-6 fw-600 text-white lg:text-3xl">
            Apply for Certification
          </p>
        </div>
        <div className="drop-shadow-md bg-white p-4 lg:pt-5 lg:px-7 mt-6 rounded-lg">
          <div>
            <div className="fw-600 lg:text-lg text-primary">
              <HeaderText text="Certifications" />
            </div>
            <p className="fs-500 mt-2 fw-500">
              We offer certification for various field in security, choose a
              field below and apply.
            </p>
          </div>
          <div className="mt-6 lg:mt-12 pb-5">
            {!isLoading && data?.data?.length && (
              <CertificationList items={data?.data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCertication;
