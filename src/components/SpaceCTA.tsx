import { AppContextType } from "../constants/interfaces";
import { useGlobalContext } from "../utils/context";
import Button from "./Button";

const SpaceCTA = () => {
  const { user } = useGlobalContext() as AppContextType;
  const UserCTA = () => {
    return (
      <div>
        <Button text='Edit' className='text-dark-1 text-[0.94rem]' />
        <Button
          text='Remove'
          className='text-primary_red ml-5 text-[0.94rem]'
        />
      </div>
    );
  };

  const CTA = () => {
    return (
      <div>
        <Button
          text='remove user'
          className='text-primary_red text-[0.94rem]'
        />
      </div>
    );
  };

  return user ? UserCTA() : CTA();
};

export default SpaceCTA;
