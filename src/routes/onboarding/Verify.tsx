import Onboarding from '../../shared/Onboarding';

const Verify = () => {
  return (
    <Onboarding showBackground>
      <div>
        <p>Confirmation keys have been sent to your email address</p>
        <div className="flex items-center justify-center gap-3 my-5">
          <div className="flex items-center justify-center w-9 rounded-lg aspect-square border border-orange-500">
            <span className="w-3 aspect-square bg-black rounded-full"></span>
          </div>
          <div className="flex items-center justify-center w-9 rounded-lg aspect-square border border-orange-500">
            <span className="w-3 aspect-square bg-black rounded-full"></span>
          </div>
          <div className="flex items-center justify-center w-9 rounded-lg aspect-square border border-orange-500">
            <span className="w-3 aspect-square bg-black rounded-full"></span>
          </div>
          <div className="flex items-center justify-center w-9 rounded-lg aspect-square border border-orange-500">
            <span className="w-3 aspect-square bg-black rounded-full"></span>
          </div>
        </div>
        <p className="text-center">Resend Confirmation Key</p>
      </div>
    </Onboarding>
  );
};

export default Verify;
