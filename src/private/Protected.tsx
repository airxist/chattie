import { Navigate } from "react-router-dom";
import { AppContextType, ReactChildren } from "../constants/interfaces";
import { useGlobalContext } from "../utils/context";

const Protected = ({ children }: ReactChildren) => {
  const { user } = useGlobalContext() as AppContextType;
  if (!user) {
    return <Navigate to='/' />
  }
  return children;
};

export default Protected;
