import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import "moment/locale/vi";
import { Toaster } from "react-hot-toast";
import "./App.css";
import AppBar from "./components/AppBar";
import MessageInput from "./components/MessageInput";
import Messages from "./components/Messages";
import UsersList from "./components/UsersList";
import ApplicationProvider from "./provider/ApplicationProvider";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ApplicationProvider>
        <Box display="flex" flexDirection="column" height="100vh" p="2">
          <AppBar />
          <Messages />
          <MessageInput />
          <UsersList />
        </Box>
      </ApplicationProvider>
      <Toaster position="top-right" />
    </ChakraProvider>
  );
};
