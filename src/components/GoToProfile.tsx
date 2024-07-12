import { useState } from "react";
import Logout from "../assets/icons/Logout";
import Button from "./Button";

const GoToProfile = ({
  className,
  showLogoutBtn,
}: {
  className?: string;
  showLogoutBtn?: boolean;
}) => {
  const [user] = useState("Joey Harran");
  return (
    <div className={`${className}`}>
      <div>
        <div className="flex items-center space-x-4 font-semibold">
          <span className="size-8 rounded-full flex items-center justify-center bg-primary_purple text-white">
            {user.substring(0, 1)}
          </span>
          <p>{user}</p>
        </div>
        {showLogoutBtn && (
          <Button className="flex items-center p-0 font-semibold">
            <div className="size-8 flex items-center">
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
