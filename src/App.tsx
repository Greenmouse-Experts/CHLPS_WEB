import { ChakraProvider } from "@chakra-ui/react";
import { landingRoutes } from "./routes/landing-routes";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { authRoutes } from "./routes/auth-routes";

const router = createBrowserRouter([...landingRoutes, ...authRoutes])
function App() {
  return (
    <ChakraProvider>
       <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
