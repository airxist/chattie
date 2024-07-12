import Back from '../assets/icons/Back';
import { AppContextType } from '../constants/interfaces';
import { animateTo } from '../utils/animate';
import { useGlobalContext } from '../utils/context';
import Button from './Button';
// import gsap from "gsap"

type TopBarProps = {
  className?: string;
  reference?: React.MutableRefObject<null>;
};

const TopBar = ({ className, reference }: TopBarProps) => {
  const { title, setDirection, direction } =
    useGlobalContext() as AppContextType;

  const goBack = () => {
    setDirection('backward');
    animateTo(reference!, direction);
  };

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

export default TopBar;
