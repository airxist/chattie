import { useLocation } from "react-router-dom";
import Back from "../assets/icons/Back";
import { AppContextType } from "../constants/interfaces";
import { animateTo } from "../utils/animate";
import { useGlobalContext } from "../utils/context";
import Button from "./Button";
import GoToProfile from "./GoToProfile";

type TopBarProps = {
  className?: string;
  reference?: React.MutableRefObject<null>;
  chat?: boolean;
  onboard?: boolean;
};

const TopBar = ({ className, reference, chat, onboard }: TopBarProps) => {
  const { pathname } = useLocation();

  const { title, setDirection, direction } =
    useGlobalContext() as AppContextType;

  const goBack = () => {
    setDirection("backward");
    animateTo(reference!, direction);
  };

  const CreateTopBar = () => {
    return (
      <header className={`${className} h-[70px] px-5 md:px-32 py-5`}>
        <div className='flex items-center space-x-3'>
          <Button handleClick={goBack}>
            <Back />
          </Button>

          <h2 className='font-bold text-sm lg:text-xl'>{title}</h2>
        </div>
      </header>
    );
  };

  const ChatTopBar = () => {
    return (
      <header className={`${className} h-[70px] chat-pad py-5`}>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-2xl'>{title}</h2>
          <GoToProfile usernameClass='hidden md:block' />
        </div>
      </header>
    );
  };

  const OnBoardTopBar = () => {
    return (
      <header className={className}>
        {pathname === "/verify" && (
          <div className='flex items-center space-x-1'>
            <Button handleClick={() => window.history.back()}>
              <Back />
            </Button>
            <h2 className='font-bold text-xl'>Back</h2>
          </div>
        )}
      </header>
    );
  };

  return chat ? ChatTopBar() : onboard ? OnBoardTopBar() : CreateTopBar();
};

export default TopBar;
