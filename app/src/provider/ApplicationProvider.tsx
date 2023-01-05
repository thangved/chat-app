import React, { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Socket from "../socket/index";
import messageType from "../types/messageType";

type ApplicationType = {
  myId: string | undefined;
  messages: messageType[];
  users: string[];
  showUsersList: boolean;
  showAlert: boolean;
  setShowUsersList: (value: boolean) => void;
  setShowAlert: (value: boolean) => void;
};

export const Application = createContext<ApplicationType>({
  myId: "",
  messages: [],
  users: [],
  showUsersList: false,
  showAlert: false,
  setShowUsersList: (value: boolean) => {},
  setShowAlert: (value: boolean) => {},
});

const ApplicationProvider: React.FC = ({ children }) => {
  const myId = useRef<string>();
  const [messages, setMessages] = useState<messageType[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [showUsersList, setShowUsersList] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    myId.current = Math.random().toString(36).slice(4);
  }, []);

  useEffect(() => {
    Socket.getSocket().on("message", (message: messageType) =>
      setMessages((prev) => [...prev, message])
    );

    Socket.getSocket().on(
      "users",
      (users: { users: string[]; leave?: string; join?: string }) => {
        setUsers(users.users);

        if (!showAlert) return;
        users.join && toast.success(`${users.join} đã tham gia.`);
        users.leave && toast.error(`${users.leave} đã rời phòng.`);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setShowAlert(
      JSON.parse(localStorage.getItem("showAlert") as string) as boolean
    );
  }, []);

  return (
    <Application.Provider
      value={{
        myId: myId.current,
        messages,
        users,
        showUsersList,
        showAlert,
        setShowUsersList,
        setShowAlert: (value: boolean) => {
          value
            ? toast.success("Đã mở thông báo")
            : toast.success("Đã tắt thông báo");
          setShowAlert(value);
          localStorage.setItem("showAlert", JSON.stringify(value));
        },
      }}
    >
      {children}
    </Application.Provider>
  );
};

export default ApplicationProvider;
