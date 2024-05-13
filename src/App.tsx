import { ChakraProvider } from "@chakra-ui/react";
import { landingRoutes } from "./routes/landing-routes";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { authRoutes } from "./routes/auth-routes";
import { userRoutes } from "./routes/user-routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([...landingRoutes, ...authRoutes, ...userRoutes])
function App() {
  return (
    <ChakraProvider>
      <ToastContainer/>
       <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
