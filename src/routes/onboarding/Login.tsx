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

 const { showAlarm } = useGlobalContext() as AppContextType;

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
  navigate("/chat-board");
 };

 return (
  <Onboarding showBackground>
   <div className="w-96">
    <Location />
    <form
     className="flex flex-col items-center justify-between gap-9 w-full"
     onSubmit={handleSubmit}
    >
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
     <p className="text-sm self-start">
      Dont have an account?{" "}
      <Link to="/" className="text-primary_purple">
       Register
      </Link>
     </p>
    </form>
   </div>
  </Onboarding>
 );
};

export default Login;
