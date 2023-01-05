import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import moment from "moment";
import React, { useContext } from "react";
import { Application } from "../provider/ApplicationProvider";
import messageType from "../types/messageType";

type props = {
  message: messageType;
};

const Message: React.FC<props> = ({ message }) => {
  const { myId } = useContext(Application);
  return (
    <HStack
      className="message"
      mb="5"
      alignItems="flex-start"
      justifyContent={message.id === myId ? "flex-end" : "flex-start"}
    >
      {!(message.id === myId) && <Avatar name={message.id} size="sm" />}

      <Box>
        <Box
          padding="10px 20px"
          borderRadius="15px"
          background={message.id === myId ? "blue.600" : "gray.100"}
          color={message.id === myId ? "white" : "black"}
        >
          <p
            style={{
              wordWrap: "break-word",
              maxWidth: 300,
            }}
          >
            {message.message}
          </p>
        </Box>
        <Text fontSize="sm">{moment(message.date).fromNow()}</Text>
      </Box>
      {message.id === myId && <Avatar name={message.id} size="sm" />}
    </HStack>
  );
};

export default Message;
