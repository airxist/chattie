import Onboarding from "../../shared/Onboarding";
import FormRow from "../../components/FormRow";
import { FormEvent } from "react";
import Button from "../../components/Button";

const Reset = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <Onboarding>
      <div className="w-full max-w-96">
        <h1 className="mb-3">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <FormRow
            type="password"
            label="password"
            labelMain="password"
            placeholder="1234...."
          />
          <FormRow
            type="password"
            label="password"
            labelMain="confirm password"
            placeholder="1234...."
          />
          <Button text="Next" className="btn primary-btn mt-3 w-full" />
        </form>
      </div>
    </Onboarding>
  )
}

export default Reset
