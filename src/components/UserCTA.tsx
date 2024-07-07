const UserCTA = ({ user }: { user: boolean }) => {
  const MainCTA = () => {
    return (
      <div>
        <button>Edit Profile</button>
        <button>Reset Password</button>
      </div>
    );
  };

  const CTA = () => {
    return (
      <div>
        <button>Message Friend</button>
        <button>Invite to a space</button>
      </div>
    );
  };

  return user ? MainCTA() : CTA();
};

export default UserCTA;
