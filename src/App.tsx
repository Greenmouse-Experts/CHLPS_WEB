import { ChakraProvider } from "@chakra-ui/react";
import { landingRoutes } from "./routes/landing-routes";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { authRoutes } from "./routes/auth-routes";
import { userRoutes } from "./routes/user-routes";

const router = createBrowserRouter([...landingRoutes, ...authRoutes, ...userRoutes])
function App() {
  return (
    <ChakraProvider>
       <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
