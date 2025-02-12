import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../utils/context";
import { AppContextType } from "../../constants/interfaces";
import { useEffect, useRef } from "react";
import FormRow from "../../components/FormRow";
import { friends } from "../../constants";
import Friend from "../../components/Friend";
import Button from "../../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WhoCanSee = () => {
  const ContainerRef = useRef(null);
  const location = useLocation();
  const { setTitle, direction } = useGlobalContext() as AppContextType;

  useEffect(() => {
    location.pathname === "/create_space/who_can_see" &&
      setTitle("Who can see anonymous messages?");
  }, [location.pathname, setTitle]);

  useGSAP(() => {
    gsap.from(ContainerRef.current, {
      x: direction === "forward" ? 1000 : -1000,
      duration: 0.5,
      autoAlpha: 0,
    });
  }, []);

  return (
    <div className='px-5 md:px-32 min-h-screen pt-28 md:flex items-start justify-center overflow-hidden'>
      <div ref={ContainerRef}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='w-full md:w-[37rem]'
        >
          <FormRow
            label='whocansee'
            type='text'
            placeholder='Search People'
            joined
          />
        </form>

        <div className='mt-6'>
          <div className='flex flex-col space-y-3'>
            <div className='flex items-center'>
              <span className='size-5 border border-dark'/>
              
              <p className='ml-3 font-semibold text-sm'>Select All</p>
            </div>
            {friends.map((friend) => {
              return <Friend key={friend} friendName={friend} />;
            })}
          </div>
        </div>

        <Button text='Done' className='primary-btn px-5 mt-12 rounded-lg' />
      </div>
    </div>
  );
};

export default WhoCanSee;
