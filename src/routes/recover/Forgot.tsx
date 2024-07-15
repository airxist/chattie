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
      <div className='max-w-[32rem] w-full'>
        <h1 className="title onboard-title mb-3">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <FormRow
            type="email"
            label="email"
            description="We will send confirmation code into your email"
            descriptionClass='description'
            placeholder="Email"
          />
          <Button text="Next" className="btn primary-btn mt-3 w-full" />
        </form>
      </div>
    </Onboarding>
  );
};

export default Forgot;
