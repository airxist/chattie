import backgroundImage from "../assets/images/bg.jpg";
import Alert from "../components/Alert";
import Bars from "../components/Bars";
import { useGlobalContext } from "../utils/context";
import { AppContextType } from "../constants/interfaces";
import Logo from "../components/Logo";
import TopBar from "../components/TopBar";
import { useLocation } from "react-router-dom";

const Onboarding = ({
  className,
  children,
  showBackground,
}: {
  className?: string;
  children: React.ReactNode;
  showBackground?: boolean;
}) => {
  const {
    alarm: { state },
  } = useGlobalContext() as AppContextType;

  const { pathname } = useLocation();

  return (
    <section
      className={`${className} max-w-screen-2xl mx-auto flex items-center justify-center h-screen`}
    >
      <div className='relative flex-1 w-[50%] min-h-full p-5 md:p-10 flex-center isolate overflow-hidden'>
        <TopBar onboard className='absolute top-4 left-5 lg:top-14 lg:left-20' />
        {pathname === "/verify" ? (
          <></>
        ) : (
          <Logo className='absolute top-5 left-5 flex items-center space-x-3 md:hidden' />
        )}
        <Bars className='bottom-0 left-0 rotate-180' />

        {children}

        <Bars className='top-0 right-0' />

        {/* the alert */}
        {state && <Alert />}
        {/* end of the alert */}
      </div>
      {showBackground && (
        <div className='hidden lg:block w-[50%] h-full relative'>
          <div className="overlay"/>
          <img src={backgroundImage} className='normal-img' />
        </div>
      )}
    </section>
  );
};

export default Onboarding;
