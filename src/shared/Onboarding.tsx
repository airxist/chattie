import backgroundImage from "../assets/images/bg.jpg";
import Alert from "../components/Alert";
import Bars from "../components/Bars";
import { AppContextType, useGlobalContext } from "../utils/context";

const Onboarding = ({
  className,
  children,
  showBackground,
}: {
  className?: string;
  children: React.ReactNode;
  showBackground?: boolean;
}) => {
  const { alarm: {state}} = useGlobalContext() as AppContextType;

  return (
    <section
      className={`${className} || flex items-center justify-center h-screen`}
    >
      <div className="relative flex-1 w-[50%] h-full px-10 py-10 flex items-center justify-center isolate">
        <Bars className="bottom-0 left-0 rotate-180" />

        {children}

        <Bars className="top-0 right-0" />

        {/* the alert */}
        {state && <Alert />}
        {/* end of the alert */}
      </div>
      {showBackground && (
        <div className="hidden lg:block w-[50%] h-full">
          <img src={backgroundImage} className="w-full h-full object-cover" />
        </div>
      )}
    </section>
  );
};

export default Onboarding;
