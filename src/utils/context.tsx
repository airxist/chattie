import { useContext } from "react";
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
    setLoading
  } = useLocalState();

  return (
    <AppContext.Provider value={{alarm,
      showAlarm,
      hideAlarm,
      success,
      setSuccess,
      loading,
      setLoading
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