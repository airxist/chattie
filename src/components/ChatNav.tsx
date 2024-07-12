import { Link } from "react-router-dom";
import { navigateChat } from "../constants";
import Button from "./Button";
import { useState } from "react";

const ChatNav = ({
  className,
  linkClassName,
}: {
  className?: string;
  linkClassName?: string;
}) => {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`${className || "h-2/5 px-8 py-3 border-b border-primary_purple flex flex-col space-y-2"}`}
    >
      {navigateChat.map((link, index) => {
        return (
          <Link key={link.title} to={link.to} onClick={() => setActive(index)}>
            <Button
              className={`${linkClassName || "border flex items-center gap-x-2"} ${index === active && "text-primary_purple"}`}
            >
              {link.icon}
              {link.title}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default ChatNav;
