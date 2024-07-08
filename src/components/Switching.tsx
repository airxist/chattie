import { Link,  useLocation } from "react-router-dom";
import { switching } from "../constants";

const Location = ({
  className
} : {
  className?: string
}) => {
  const location = useLocation();
  return (
    <div className={`${className || 'mb-5'} flex divide-x-2 divide-primary_purple-3`}>
      {
        switching.map((item) => (
          <Link 
          to={item.route} 
          key={item.name}
          className={` flex items-center justify-center p-1 capitalize ${location.pathname === item.route ? "text-lg font-medium" : "text-sm font-semibold"}`}
          >
            {item.name}
          </Link>
        ))
      }
    </div>
  );
};

export default Location;
