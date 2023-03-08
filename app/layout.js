import BasicNavbar from "@/components/BasicNavBar";
import AuthContextProvider from "@/context/AuthContextProvider";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactQueryWrapper from "./ReactQueryWrapper";

const RootLayout = ({ children }) => {
  return (
    <ReactQueryWrapper>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <div>
            <BasicNavbar />
          </div>
          <div>{children}</div>
        </ChakraProvider>
      </AuthContextProvider>
    </ReactQueryWrapper>
  );
};

export default RootLayout;
