import Onboarding from "../../shared/Onboarding";
import FormRow from "../../components/FormRow";
import { FormEvent, useState } from "react";
import Button from "../../components/Button";
import { useGlobalContext } from "../../utils/context";
import { AppContextType } from "../../constants/interfaces";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();

  const { showAlarm } = useGlobalContext() as AppContextType;

  const [formData, setFormData] = useState({
    password: "",
    confirm: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputID = event.currentTarget.id;
    const inputVal = event.currentTarget.value;
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [inputID]: inputVal,
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // verifying inputs
    const { password, confirm } = formData;
    if (!password || !confirm) {
      return showAlarm("danger", "Please inputs must be filled");
    }

    if (password !== confirm) {
      return showAlarm("danger", "unmatched passworrds");
    } else {
      showAlarm("success", "password confirm");
    }
    // back to login
    navigate("/login");

    // proceed to backend using axios
  };

  return (
    <Onboarding>
      <div className='max-w-[32rem] w-full'>
        <h1 className='title onboard-title mb-3'>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <FormRow
            type='password'
            label='password'
            labelMain='password'
            placeholder='1234....'
            value={formData.password}
            handleChange={handleChange}
          />
          <FormRow
            type='password'
            label='confirm'
            labelMain='confirm password'
            placeholder='1234....'
            value={formData.confirm}
            handleChange={handleChange}
          />
          <Button text='Next' className='btn primary-btn mt-3 w-full' />
        </form>
      </div>
    </Onboarding>
  );
};

export default Reset;
