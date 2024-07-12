import { useState } from 'react';
import Logout from '../assets/icons/Logout';
import Button from './Button';

const GoToProfile = ({
  className,
  showLogoutBtn,
}: {
  className: string;
  showLogoutBtn: boolean;
}) => {
  const [user] = useState('Joey Harran');
  return (
    <div className={`${className}`}>
      <div className="border border-red-800">
        <div className="flex items-center space-x-4">
          <span className="size-11 rounded-full flex items-center justify-center bg-primary_purple text-white">
            {user.substring(0, 1)}
          </span>
          <p>{user}</p>
        </div>
        {showLogoutBtn && (
          <Button className="flex items-center p-0 mt-3 gap-x-4">
            <div className="size-11 flex items-center justify-center bg-primary_purple-4">
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
