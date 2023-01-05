import {
  Avatar,
  AvatarBadge,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Application } from "../provider/ApplicationProvider";

const UsersList = () => {
  const { users, showUsersList, setShowUsersList, showAlert, setShowAlert } =
    useContext(Application);
  return (
    <Drawer
      isOpen={showUsersList}
      placement="right"
      onClose={() => setShowUsersList(false)}
      size="full"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottom="1px solid #ddd">Chat app</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" margin="0 -20px">
            <FormControl display="flex" borderBottom="1px solid #ddd">
              <FormLabel>Hiển thị thông báo?</FormLabel>
              <Switch
                isChecked={showAlert}
                onChange={(event) => setShowAlert(event.target.checked)}
              />
            </FormControl>
            <Box flex="1" overflowY="auto">
              {users.map((user) => (
                <Flex padding="10px 0" key={user} borderBottom="1px solid #ddd">
                  <Avatar name={user}>
                    <AvatarBadge boxSize="1.25em" bg="green" />
                  </Avatar>
                  <Box ml="3">
                    <Text fontWeight="bold">{user}</Text>
                    <Text fontSize="sm">{user}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default UsersList;
