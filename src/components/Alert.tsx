import { useGlobalContext } from "../utils/context";
import { AppContextType } from "../constants/interfaces";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animateAlert } from "../utils/animate";

const Alert = () => {
  const { alarm, hideAlarm } = useGlobalContext() as AppContextType;

  const alertRef = useRef(null);

  const { type, message } = alarm;

  useGSAP(() => {
    animateAlert(alertRef, true)
  }, [type]);

  const hideAlert = () => {
    animateAlert(alertRef, false, hideAlarm)
  }

  return (
    <div
      className={`alert ${type === "danger" ? "border-primary_red" : "border-primary_purple"}`}
      ref={alertRef}
    >
      <p className='font-normal text-[0.75rem]'>{message}</p>
      <Button
        className={`${type === "danger" ? "bg-primary_red-3 text-primary_red-4" : "bg-primary_purple-3 text-primary_purple"} size-7 rounded-full flex-center`}
        handleClick={hideAlert}
      >
        x
      </Button>
    </div>
  );
};

export default Alert;
