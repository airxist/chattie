import { FormEvent } from 'react';
import Button from '../../components/Button';
import FormRow from '../../components/FormRow';
import Onboarding from '../../shared/Onboarding';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/reset_password');
  };

  return (
    <Onboarding>
      <div>
        <h1 className="mb-3">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <FormRow
            type="email"
            label="email"
            labelMain="We will send confirmation code into your email"
            placeholder="Email"
          />
          <Button text="Next" className="btn primary-btn mt-3 w-full" />
        </form>
      </div>
    </Onboarding>
  );
};

export default Forgot;
