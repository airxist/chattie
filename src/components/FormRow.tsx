import { Link } from "react-router-dom";

type FormRowProps = {
  joined?: boolean;
  label: string;
  labelMain?: string;
  type: string;
  placeholder?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  route?: string;
  check?: boolean;
  description?: string;
  descriptionClass?: string;
  labelText?: string;
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
  check,
  description,
  descriptionClass,
  labelText,
}: FormRowProps) => {
  const LinkingInput = () => {
    return (
      <div className='input-container'>
        <div className='flex items-center justify-between'>
          <label htmlFor={label} className='capitalize text-sm font-bold'>
            {labelMain}
          </label>

          <Link to={`${route}`} className='link text-sm font-light'>
            Forgot {label}
          </Link>
        </div>
        <div>
          <input
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className='inputation'
          />
        </div>
      </div>
    );
  };

  const NonLinkingInput = () => {
    return (
      <div className='input-container'>
        <div className='flex items-center justify-between'>
          <label htmlFor={label} className='capitalize text-sm font-bold'>
            {labelMain}
          </label>
        </div>
        {description && <p className={`${descriptionClass || 'text-sm text-slate-400'}`}>{description}</p>}
        <div>
          <input
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className='inputation'
          />
        </div>
      </div>
    );
  };

  const JoinedInput = () => {
    return (
      <div className='input-container'>
        <div className='flex items-center justify-between'>
          <label htmlFor={label} className='capitalize text-sm font-bold'>
            {labelMain}
          </label>
        </div>
        <div className='flex space-x-1'>
          <input
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className='h-12 px-5 w-4/5 rounded-lg'
          />
          <input
            type='submit'
            value='Add'
            className='w-1/5 primary-btn rounded-lg'
          />
        </div>
      </div>
    );
  };

  const CheckBox = () => {
    return (
      <div className='input-container'>
        <label htmlFor={label}>{labelText}</label>
        <input type={type} id={label} name={label} onChange={handleChange} />
      </div>
    );
  };

  return route
    ? LinkingInput()
    : joined
      ? JoinedInput()
      : check
        ? CheckBox()
        : NonLinkingInput();
};

export default FormRow;
