import FormRow from "../../components/FormRow";
import Onboarding from "../../shared/Onboarding";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Location from "../../components/Switching";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
    
    setFormData((prev) => {
      return {
        ...prev,
        [e.currentTarget!.name]: e.currentTarget!.value,
      };
    });
  };

  return (
    <Onboarding showBackground>
      <div className="w-[377px]">
        <Location />
        <form className="flex flex-col items-center justify-between gap-9 w-full">
          <FormRow
            label="fullname"
            labelMain="Full Name"
            type="text"
            placeholder="Daniel"
            value={formData.fullname}
            handleChange={handleChange}
          />
          <FormRow
            label="email"
            labelMain="email"
            type="email"
            placeholder="JohnDoe@gmail.com"
            value={formData.email}
            handleChange={handleChange}
          />
          <FormRow
            label="password"
            labelMain="password"
            type="password"
            placeholder="Daniel"
            value={formData.password}
            handleChange={handleChange}
          />
          <FormRow
            label="confirm"
            labelMain="Confirm Password"
            type="password"
            placeholder="Daniel"
          />
          {/* submit button */}
          <Button text="Register" className="btn primary-btn w-full" />
          {/* reroutint text */}
          <p className="text-sm self-start">
            Already have an account? <Link to="login" className="text-primary_purple">Login</Link>
          </p>
        </form>
      </div>
    </Onboarding>
  );
};

export default Register;
