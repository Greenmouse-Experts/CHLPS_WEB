import HeaderText from "../../lib/components/header-text";

const UserMembership = () => {
  const membership = [
    "Apply for Licenciate Member",
    "Apply for Associate Menber",
  ];
  const bgs: string[] = [
    "bg-green-100",
    "bg-blue-100",
    "bg-orange-100",
    "bg-brown-100",
  ];
  return (
    <div>
      <div className="h-[220px] rounded-lg drop-shadow-md bg-plans bg-cover bg-center">
        <p className="pl-6 pt-6 fw-600 text-white lg:text-3xl">Join Our Membership Plans</p>
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
          {membership.map((item, index) => {
            const colorIndex = index % bgs.length;
            const color = bgs[colorIndex];
            return (
              <div
                className={`border-l-[3px] p-4 border-${color}-600 cursor-pointer ${color} hover:scale-x-[1.01] hover:sahdow-md duration-100`}
              >
                <p className="fw-500 lg:text-lg">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserMembership;
