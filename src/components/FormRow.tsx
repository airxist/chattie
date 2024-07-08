import { Link } from "react-router-dom";

type FormRowProps = {
  joined?: boolean;
  label: string;
  labelMain: string;
  type: string;
  placeholder?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  route?: string;
};

const FormRow = ({
  joined,
  label,
  labelMain,
  type,
  placeholder,
  value,
  handleChange,
  route,
}: FormRowProps) => {
  const LinkingInput = () => {
    return (
      <div className="input-container">
        <div className="flex items-center justify-between">
          <label htmlFor={label} className="capitalize">
            {labelMain}
          </label>

          <Link to={`${route}`} className="text-primary_purple">Forgot {label}</Link>
        </div>
        <div>
          <input
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className="h-12 px-5 w-full rounded-lg"
          />
        </div>
      </div>
    );
  };

  const NonLinkingInput = () => {
    return (
      <div className="input-container">
        <div className="flex items-center justify-between">
          <label htmlFor={label} className="capitalize">
            {labelMain}
          </label>
        </div>
        <div>
          <input
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className="h-12 px-5 w-full rounded-lg"
          />
        </div>
      </div>
    );
  };

  const JoinedInput = () => {
    return (
      <div className="input-container">
        <div className="flex items-center justify-between">
          <label htmlFor={label} className="capitalize">
            {labelMain}
          </label>
        </div>
        <div className="flex space-x-1">
          <input
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className="h-12 px-5 w-4/5 rounded-lg"
          />
          <input type="submit" value="Add" className="w-1/5 primary-btn rounded-lg" />
        </div>
      </div>
    );
  };

  return route ? LinkingInput() : joined ? JoinedInput() : NonLinkingInput();
};

export default FormRow;
