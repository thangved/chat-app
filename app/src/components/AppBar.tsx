import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Application } from "../provider/ApplicationProvider";

const AppBar = () => {
  const { users, setShowUsersList } = useContext(Application);
  return (
    <Flex
      background="gray.100"
      m="-2"
      p="2"
      borderBottom="1px solid #ddd"
      alignItems="center"
    >
      <AvatarGroup max={3} flex="1">
        {users.map((user) => (
          <Avatar key={user} name={user}>
            <AvatarBadge bg="green" boxSize="1.25em" />
          </Avatar>
        ))}
      </AvatarGroup>
      <Button onClick={() => setShowUsersList(true)}>
        <HamburgerIcon />
      </Button>
    </Flex>
  );
};

export default AppBar;
