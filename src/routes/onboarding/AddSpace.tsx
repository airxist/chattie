import { useState } from "react";
import Button from "../../components/Button";
import FormRow from "../../components/FormRow";
import { AppContextType } from "../../constants/interfaces";
import Onboarding from "../../shared/Onboarding";
import { useGlobalContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const AddSpace = () => {
  const { showAlarm } = useGlobalContext() as AppContextType;

  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const nextPage = (action: string) => {
    if (action === "next" && !value) {
      return showAlarm("danger", "you can skip, if you dont want this");
    }
    navigate("/selection");
  };

  return (
    <Onboarding>
      <div className='w-[32rem]'>
        <h1 className='onboard-title'>Create your own space</h1>
        <form
          className='my-3 flex flex-col space-y-5'
          onSubmit={(event) => event.preventDefault()}
        >
          <FormRow
            label='space'
            type='text'
            description="It's your private space, why don't you give it a name"
            descriptionClass='description'
            placeholder='My Space'
            value={value}
            handleChange={(event) => {
              setValue(event.currentTarget.value);
            }}
          />
          <Button
            text='Next'
            className='btn w-full primary-btn h-12'
            handleClick={() => nextPage("next")}
          />
          <Button
            text='Skip'
            className='btn secondary-btn h-12 border'
            handleClick={() => nextPage("skip")}
          />
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
