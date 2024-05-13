
import UserDashboardLayout from "../layout/user";
import UserCertication from "../pages/user/cerification";
import UserDashboard from "../pages/user/dashboard";
import JoinMembership from "../pages/user/join-membership";
import UserMembership from "../pages/user/membership";
import MyMembership from "../pages/user/my-mebership";
import MyCertification from "../pages/user/my-certification";
import UserTickets from "../pages/user/tickets";
import UserProfile from "../pages/user/settings";

export const userRoutes = [
    {
        path: '/user/',
        element: <UserDashboardLayout/>,
        children: [
          {
            index: true,
            element: <UserDashboard/>,
          },
          {
            path: 'plans',
            element: <UserMembership/>,
          },
          {
            path: 'plans/:id',
            element: <JoinMembership/>,
          },
          {
            path: 'membership',
            element: <MyMembership/>
          },
          {
            path: 'certify',
            element: <UserCertication/>,
          },
          {
            path: 'my-certify',
            element: <MyCertification/>,
          },
          {
            path: 'tickets',
            element: <UserTickets/>,
          },
          {
            path: 'profile',
            element: <UserProfile/>
          },
          {
            path: 'notify',
            element: <></>
          },
          {
            path: 'payments',
            element: <></>,
          },
          {
            path: 'events',
            element: <></>
          },
        ],
      },
]