
import UserDashboardLayout from "../layout/user";
import UserDashboard from "../pages/user/dashboard";
import UserMembership from "../pages/user/membership";

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
        ],
      },
]