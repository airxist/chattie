import Header from "../components/Header";

const ProfileBoard = ({ children } : {children : React.ReactNode}) => {
  const UserProfile = () => {
    return <section>
      <Header
        className="border-b border-b-slate-300 px-5 md:px-32 py-5"
      />
      { children }
    </section>
  }

  return UserProfile()
};

export default ProfileBoard;
