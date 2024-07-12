import Button from '../../components/Button';
import FormRow from '../../components/FormRow';
import Onboarding from '../../shared/Onboarding';

const AddSpace = () => {
  return (
    <Onboarding>
      <div className="border border-orange-700 w-[30rem]">
        <h1>Create your own space</h1>
        <form className="my-3 flex flex-col gap-5">
          <FormRow
            label="space"
            type="text"
            labelMain="It's your private space, why don't you give it a name"
            value="myspace"
          />
          <Button text="Next" className="btn w-full primary-btn" />
        </form>
        <p className="text-sm">
          By continuing, you are agreeing to our terms of service, user terms of
          service, privacy policy and cookie policy
        </p>
      </div>
    </Onboarding>
  );
};

export default AddSpace;
