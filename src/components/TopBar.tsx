import Back from "../assets/icons/Back";
import { AppContextType } from "../constants/interfaces";
import { animateTo } from "../utils/animate";
import { useGlobalContext } from "../utils/context";
import Button from "./Button";
import GoToProfile from "./GoToProfile";
// import gsap from "gsap"

type TopBarProps = {
  className?: string;
  reference?: React.MutableRefObject<null>;
  chat?: boolean;
};

const TopBar = ({ className, reference, chat }: TopBarProps) => {
  const { title, setDirection, direction } =
    useGlobalContext() as AppContextType;

  const goBack = () => {
    setDirection("backward");
    animateTo(reference!, direction);
  };

  const CreateTopBar = () => {
    return (
      <header className={`${className} h-[70px] px-5 md:px-32 py-5`}>
        <div className="flex items-center space-x-3">
          <Button handleClick={goBack}>
            <Back />
          </Button>

          <h2 className="font-semibold">{title}</h2>
        </div>
      </header>
    );
  };

  const ChatTopBar = () => {
    return (
      <header className={`${className} h-[70px] px-5 py-5`}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">{title}</h2>
          <GoToProfile usernameClass="hidden md:block" />
        </div>
      </header>
    );
  };

  return chat ? ChatTopBar() : CreateTopBar();
};

export default TopBar;
