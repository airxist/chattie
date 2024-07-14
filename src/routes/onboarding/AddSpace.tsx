import Button from "../../components/Button";
import FormRow from "../../components/FormRow";
import Onboarding from "../../shared/Onboarding";

const AddSpace = () => {
  return (
    <Onboarding>
      <div className='w-[32rem]'>
        <h1 className="onboard-title">Create your own space</h1>
        <form className='my-3 flex flex-col space-y-6'>
          <FormRow
            label='space'
            type='text'
            description="It's your private space, why don't you give it a name"
            descriptionClass="text-xl font-normal text-dark-2"
            value='myspace'
          />
          <Button text='Next' className='btn w-full primary-btn' />
        </form>
        <p className='text-[15px] text-dark-1'>
          By continuing, you are agreeing to our terms of service, user terms of
          service, privacy policy and cookie policy
        </p>
      </div>
    </Onboarding>
  );
};

export default AddSpace;
