import { useState } from "react";
import Onboarding from "../../shared/Onboarding";

const Verify = () => {
  const [pin] = useState([0, 0, 1, 0]);
  return (
    <Onboarding showBackground>
      <div className='w-[244px]'>
        <p className='text-center text-sm'>
          Confirmation keys have been sent to your email address
        </p>
        <div className='flex items-center justify-center gap-3 my-5'>
          {pin.map((pin, index) => {
            return (
              <div
                key={index}
                className='flex-center w-8 rounded-md aspect-square border bg-primary_purple-3 border-dark-1'
              >
                {pin && (
                  <span className='w-3 aspect-square bg-black rounded-full'></span>
                )}
              </div>
            );
          })}
        </div>
        <p className='text-center link text-sm'>Resend Confirmation Key</p>
      </div>
    </Onboarding>
  );
};

export default Verify;
