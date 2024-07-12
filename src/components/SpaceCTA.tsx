import Button from './Button';

const SpaceCTA = ({ user }: { user: boolean }) => {
  const UserCTA = () => {
    return (
      <div>
        <Button text="Edit" className="text-dark-1" />
        <Button text="Remove" className="text-primary_red ml-5" />
      </div>
    );
  };

  const CTA = () => {
    return (
      <div>
        <Button text="remove user" className="text-primary_red" />
      </div>
    );
  };

  return user ? UserCTA() : CTA();
};

export default SpaceCTA;
