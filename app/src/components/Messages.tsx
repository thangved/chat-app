import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";
import { Application } from "../provider/ApplicationProvider";
import messageType from "../types/messageType";
import Message from "./Message";

const Messages = () => {
  const { messages } = useContext(Application);
  const refMess = useRef<HTMLDivElement>();

  useEffect(() => {
    refMess.current?.scrollTo(
      refMess.current.scrollHeight,
      refMess.current.scrollHeight
    );
  }, [messages]);

  return (
    <Box
      flex="1"
      overflowY="auto"
      ref={(ref) => (refMess.current = ref as HTMLDivElement)}
      overflowX="hidden"
      mt="4"
    >
      {messages.map((message: messageType, key: number) => (
        <Message message={message} key={key} />
      ))}
    </Box>
  );
};

export default Messages;
