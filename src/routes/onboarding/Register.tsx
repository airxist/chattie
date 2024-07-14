import FormRow from "../../components/FormRow";
import Onboarding from "../../shared/Onboarding";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Location from "../../components/Switching";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const currentName: string = e.currentTarget.name;
    const currentValue: string = e.currentTarget.value;
    setFormData((prev) => {
      return {
        ...prev,
        [currentName]: currentValue,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("I am handling submit");
    navigate("/verify", {});
  };

  return (
    <Onboarding showBackground>
      <div className='onboard-container'>
        <Location />
        <form
          className='onboard-form'
          onSubmit={handleSubmit}
        >
          <FormRow
            label='fullname'
            labelMain='Full Name'
            type='text'
            placeholder='Daniel'
            value={formData.fullname}
            handleChange={handleChange}
          />
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
          />
          <FormRow
            label='confirm'
            labelMain='Confirm Password'
            type='password'
            placeholder='Daniel'
          />
          {/* submit button */}
          <Button text='Register' className='btn primary-btn w-full' />
          {/* reroutint text */}
          <p className='text-sm self-start'>
            Already have an account?{" "}
            <Link to='login' className='link'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </Onboarding>
  );
};

export default Register;
