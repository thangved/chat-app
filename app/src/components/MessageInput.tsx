import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Application } from "../provider/ApplicationProvider";
import Socket from "../socket/index";

const MessageInput = () => {
  const { myId } = useContext(Application);
  const [message, setMessage] = useState<string>("");
  const sendMessage = () => {
    if (!message.length) return;
    Socket.getSocket().emit("message", {
      id: myId,
      message,
      date: Date.now(),
    });
    setMessage("");
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendMessage();
      }}
    >
      <HStack>
        <Input
          placeholder="Nhập nội dung chat ở đây"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button type="submit" rightIcon={<ArrowRightIcon />}>
          Send
        </Button>
      </HStack>
    </form>
  );
};

export default MessageInput;
