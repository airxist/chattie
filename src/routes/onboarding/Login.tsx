import Onboarding from "../../shared/Onboarding"
import FormRow from "../../components/FormRow";
import { useState } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Location from "../../components/Switching";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.name, e.currentTarget.value);
    const currentName : string = e.currentTarget.name;
    const currentValue : string = e.currentTarget.value;
    setFormData((prev) => {
      return {
        ...prev,
        [currentName]: currentValue,
      };
    });
  };

  return (
    <Onboarding showBackground>
      <div className="w-96">
        <Location />
        <form className="flex flex-col items-center justify-between gap-9 w-full">
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
            route="/forgot_password"
          />
        {/* submit button */}
        <Button text="Login" className="btn primary-btn w-full" />
        {/* reroutint text */}
        <p className="text-sm self-start">Dont have an account? <Link to="/" className="text-primary_purple">Register</Link></p>
        </form>
      </div>
    </Onboarding>
  );
}

export default Login
