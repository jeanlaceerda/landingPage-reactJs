import {ChakraProvider,theme} from "@chakra-ui/react";
import { LandingPage } from "./pages/landing-page"

export const App = () => (
  <ChakraProvider theme={theme}>
    <LandingPage />
  </ChakraProvider>
)
