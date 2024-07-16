import Onboarding from "../../shared/Onboarding";
import FormRow from "../../components/FormRow";
import { useState } from "react";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Location from "../../components/Switching";
import { useGlobalContext } from "../../utils/context";
import { AppContextType } from "../../constants/interfaces";

const Login = () => {
  const navigate = useNavigate();

  const { showAlarm, registeredUsers, loginUser, setUserSpaces, spaces, setSpaceToDisplay } =
    useGlobalContext() as AppContextType;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const currentName: string = event.currentTarget.name;
    const currentValue: string = event.currentTarget.value;
    setFormData((prev) => {
      return {
        ...prev,
        [currentName]: currentValue,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      showAlarm("danger", "please input email and password");
      return;
    }
    // check database for the user
    const findUser = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    // if user does not exist
    if (!findUser) {
      showAlarm("danger", "Incorrect inputs");
      return;
    }
    // check user verification
    if (!findUser.isVerified) {
      showAlarm("danger", "Please verify your account");
      return;
    }
    const { id, fullname, profile } = findUser;
    // set up user spaces
    const getUserSpaces = spaces.filter((space) => {
      return space.members.find((member) => member === fullname);
    }).map((userSpace, index) => {
      return index === 0 ? {...userSpace, active: true} : {...userSpace}
    });
    // update id of space to be displayed first
    const getIdOfSpaceToDisplay = getUserSpaces[0].id;


    setSpaceToDisplay(getIdOfSpaceToDisplay);
    setUserSpaces(getUserSpaces);
    // login user action
    loginUser(id, fullname, email, profile!);

    navigate("/chat-board");
  };

  return (
    <Onboarding showBackground>
      <div className='onboard-container'>
        <Location />
        <form className='onboard-form' onSubmit={handleSubmit}>
          <FormRow
            label='email'
            labelMain='email'
            type='email'
            placeholder='JohnDoe@gmail.com'
            value={formData.email}
            handleChange={handleChange}
          />
          <FormRow
            label='password'
            labelMain='password'
            type='password'
            placeholder='Daniel'
            value={formData.password}
            handleChange={handleChange}
            route='/forgot_password'
          />
          {/* submit button */}
          <Button text='Login' className='btn primary-btn w-full' />
          {/* reroutint text */}
          <p className='text-sm self-start'>
            Dont have an account?{" "}
            <Link to='/' className='link'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </Onboarding>
  );
};

export default Login;
