import Logout from "../assets/icons/Logout";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import { AppContextType, UserType } from "../constants/interfaces";

const GoToProfile = ({
  className,
  showLogoutBtn,
  usernameClass,
}: {
  className?: string;
  showLogoutBtn?: boolean;
  usernameClass?: string;
}) => {
  const { user, logoutUser } = useGlobalContext() as AppContextType;
  const { fullname } = user as UserType;

  return (
    <div className={`${className}`}>
      <div>
        <Link
          to='/profile'
          className='flex items-center space-x-4 font-semibold'
        >
          <span className='size-7 rounded-full flex-center bg-primary_purple text-white text-[0.75rem]'>
            {fullname.substring(0, 1)}
          </span>
          <p className={`${usernameClass} text-sm`}>{fullname}</p>
        </Link>
        {showLogoutBtn && (
          <Button
            className='flex items-center text-sm p-0 font-semibold'
            handleClick={logoutUser}
          >
            <div className='size-8 flex items-center'>
              <Logout />
            </div>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default GoToProfile;
