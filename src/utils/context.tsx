import { useContext, useState } from "react";
import { createContext } from "react";
import useLocalState from "./useLocalState";
import {
  ReactChildren,
  AppContextType,
  SpaceArrayType,
  UserType,
  SpacesType,
  chatPageType,
} from "../constants/interfaces";
import registerdUsers from "../db/registeredUsers";
import createdSpaces from "../db/createdSpaces";
import chatLists from "../db/spacesChats";
import { useNavigate } from "react-router-dom";

// create context
const AppContext = createContext<AppContextType | null>(null);

// create a provider
const AppProvider = ({ children }: ReactChildren) => {
  const navigate = useNavigate();

  const {
    alarm,
    showAlarm,
    hideAlarm,
    success,
    setSuccess,
    loading,
    setLoading,
    title,
    setTitle,
  } = useLocalState();

  // SIDEBAR====================================
  const [showSideBar, setShowSideBar] = useState(false);

  const closeSideBar = () => {
    console.log("side bar closed");
    setShowSideBar(false);
  };
  const openSideBar = () => {
    console.log("sidebar is open");
    setShowSideBar(true);
  };
  // END OF SIDEBAR ==============================
  const [chatData, setChatData] = useState<SpaceArrayType[]>(chatLists);
  // setRegisteredUsers removed it for now
  const [registeredUsers] = useState(registerdUsers);
  const [user, setUser] = useState<UserType | null>(null);

  const logoutUser = () => {
    setUser(null);
    navigate("/login");
  };

  const loginUser = (
    id: number,
    fullname: string,
    email: string,
    profile: string,
    online: boolean = true
  ) => {
    setUser({
      id,
      fullname,
      email,
      profile,
      online,
    });
  };

  const [spaces, setSpaces] = useState(createdSpaces);
  const [userSpaces, setUserSpaces] = useState<SpacesType[] | []>([]);

  const [direction, setDirection] = useState("forward");

  const [spaceToDisplay, setSpaceToDisplay] = useState<number | null>(null);

  const [chatPage, setChatPage] = useState<chatPageType>({
    id: 0,
    title: "",
    description: "",
    active: false,
    chatLists: [],
  });

  return (
    <AppContext.Provider
      value={{
        alarm,
        showAlarm,
        hideAlarm,
        success,
        setSuccess,
        loading,
        setLoading,
        title,
        setTitle,
        direction,
        setDirection,
        chatData,
        setChatData,
        spaces,
        userSpaces,
        setSpaces,
        setUserSpaces,
        registeredUsers,
        // setRegisteredUsers,
        user,
        loginUser,
        logoutUser,
        spaceToDisplay,
        setSpaceToDisplay,
        chatPage,
        setChatPage,
        showSideBar,
        closeSideBar,
        openSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
