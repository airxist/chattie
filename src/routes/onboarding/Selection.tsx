import Button from '../../components/Button';
import FormRow from '../../components/FormRow';
import Onboarding from '../../shared/Onboarding';

const Selection = () => {
  return (
    <Onboarding>
      <div className="max-w-[30rem] w-full">
        <h1 className="mb-3 font-semibold text-3xl text-center">
          Add your team members or friends
        </h1>
        <div>
          <form>
            <FormRow
              joined
              type="email"
              label="email"
              labelMain="You don’t want to be alone, why not bring in your friends or team for private discussion"
              placeholder="JohnDoe@gmail.com"
            />
          </form>
          {/* show added friends */}
          <div className="bg-white p-10 mt-3">
            This is for when we add a friend or team member
          </div>
          <Button text="Done" className="my-3 w-full btn primary-btn" />
          <Button text="Skip" />
        </div>
      </div>
    </Onboarding>
  );
};

export default Selection;
