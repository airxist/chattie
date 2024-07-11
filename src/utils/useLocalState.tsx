import { useState } from "react"

const useLocalState = () : {
  alert: {state: boolean,type: string,message: string},
  showAlert: (type: string, message: string) => void,
    hideAlert: () => void,
    success: boolean,
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
} => {
  const [alert, setAlert] = useState({
    state: false,
    type: 'danger',
    message: 'The Alert'
  });

  const showAlert = (type = 'danger', message : string) => {
    setAlert({
      state: true,
      type,
      message
    })
  }

  const hideAlert = () => setAlert({state: false, type: 'danger', message: ''})

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  return {alert,
    showAlert,
    hideAlert,
    success,
    setSuccess,
    loading,
    setLoading
  }
}

export default useLocalState;