import { useContext, useState } from "react";
import { createContext } from "react";
import useLocalState from './useLocalState';
import { ReactChildren, AppContextType } from "../constants/interfaces";


// create context
const AppContext = createContext<AppContextType | null>(null);

// create a provider
const AppProvider = ({children}: ReactChildren) => {
  const {alarm,
    showAlarm,
    hideAlarm,
    success,
    setSuccess,
    loading,
    setLoading,
    title,
    setTitle
  } = useLocalState();
  
  const [direction, setDirection] = useState('forward');

  return (
    <AppContext.Provider value={{alarm,
      showAlarm,
      hideAlarm,
      success,
      setSuccess,
      loading,
      setLoading,
      title,
      setTitle,
      direction,
      setDirection
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export {
  AppProvider,
  useGlobalContext
}