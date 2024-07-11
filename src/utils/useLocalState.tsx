import { useState } from "react"

const useLocalState = () : {
  alarm: {state: boolean,type: string,message: string},
  showAlarm: (type: string, message: string) => void,
    hideAlarm: () => void,
    success: boolean,
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
} => {
  const [alarm, setAlarm] = useState({
    state: true,
    type: 'danger',
    message: 'The Alert'
  });

  const showAlarm = (type = 'danger', message : string) => {
    setAlarm({
      state: true,
      type,
      message
    })
  }

  const hideAlarm = () => setAlarm({state: false, type: 'danger', message: ''})

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  return {alarm,
    showAlarm,
    hideAlarm,
    success,
    setSuccess,
    loading,
    setLoading
  }
}

export default useLocalState;