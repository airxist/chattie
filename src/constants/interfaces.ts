export interface ReactChildren {
  children: React.ReactNode;
}

interface Registered {
  id: number;
  fullname: string;
  email: string;
  password: string;
  profile?: string,
  isVerified: boolean;
  verificationCode: string;
}

export interface UserType {
  id: number;
  fullname: string;
  email: string,
  profile: string,
  online: boolean;
}

export interface SpacesType {
  id: number;
  title: string;
  description: string;
  creator: number;
  members: string[];
  active: boolean;
}

export interface AppContextType {
  alarm: { state: boolean; type: string; message: string };
  showAlarm: (type: string, message: string) => void;
  hideAlarm: () => void;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  direction: string;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
  chatData: SpaceArrayType[];
  setChatData: React.Dispatch<React.SetStateAction<[] | SpaceArrayType[]>>;
  spaces: SpacesType[];
  userSpaces: SpacesType[] | [];
  setSpaces: React.Dispatch<React.SetStateAction<SpacesType[]>>;
  setUserSpaces: React.Dispatch<React.SetStateAction<SpacesType[] | []>>;
  registeredUsers: Registered[];
  // setRegisteredUsers: React.Dispatch<React.SetStateAction<Registered[]>>;
  user: UserType | null;
  loginUser: (id: number, fullname: string, email: string, profile: string, online?: boolean) => void;
  logoutUser: () => void;
  spaceToDisplay: number | null,
  setSpaceToDisplay: React.Dispatch<React.SetStateAction<number | null>>,
  chatPage: chatPageType,
  setChatPage: React.Dispatch<React.SetStateAction<chatPageType>>
}

export interface chatPageType {
  id: number;
    title: string;
    description: string;
    active: boolean;
    chatLists: chatTemplate[] | undefined;
}

export interface chatTemplate {
  username?: string;
  date: string;
  message: string;
  important?: boolean;
  replies?: string[];
}

export interface SpaceArrayType {
  id: number,
  channels: {
    chats: chatTemplate[];
    dms: chatTemplate[];
    anonymous: chatTemplate[];
  };
}
