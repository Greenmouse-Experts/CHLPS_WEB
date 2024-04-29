
import LoginPage from "../pages/auth/login";
import VerifyOtp from "../pages/auth/otp";
import RegisterPage from "../pages/auth/register";

export const authRoutes = [
    {
        path: '/auth/',
        children: [
          {
            path: 'login',
            element: <LoginPage/>,
          },
          {
            path: 'register',
            element: <RegisterPage/>,
          },
          {
            path: 'otp',
            element: <VerifyOtp/>,
          },
        ],
      },
]