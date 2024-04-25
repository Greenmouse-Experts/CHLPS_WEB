
import LandingLayout from "../layout/landing";
import Homepage from "../pages/landing/homepage";

export const landingRoutes = [
    {
        path: '/',
        element: <LandingLayout/>,
        children: [
          {
            index: true,
            element: <Homepage/>,
          },
          {
            path: 'about',
            element: <>ppp</>,
          },
        ],
      },
]