import { Link, useLocation } from "react-router-dom";
import { switching } from "../constants";
import Button from "./Button";

const Location = ({
  className,
  chat,
  addSwitch,
}: {
  className?: string;
  chat?: boolean;
  addSwitch?: boolean;
}) => {
  const location = useLocation();

  const OnboardSwitch = () => {
    return (
      <div
        className={`${className || "mb-2"} flex divide-x-2 divide-primary_purple-3`}
      >
        {switching.map((item) => (
          <Link
            to={item.route}
            key={item.name}
            className={`flex-center p-1 capitalize ${location.pathname === item.route ? "text-xl font-medium" : "text-sm font-black"}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    );
  };

  const ChatSwitch = () => {
    return (
      <div
        className={`${className || "mb-5"} flex divide-x-2 divide-primary_purple-3`}
      >
        <Button className={` flex items-center justify-center p-1 capitalize `}>
          Chats
        </Button>
        {addSwitch && (
          <Button
            className={` flex items-center justify-center p-1 capitalize `}
          >
            Important
          </Button>
        )}
      </div>
    );
  };

  // ${location.pathname === item.route ? "text-lg font-medium" : "text-sm font-semibold"}

  return chat ? ChatSwitch() : OnboardSwitch();
};

export default Location;
