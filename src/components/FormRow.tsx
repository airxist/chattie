import { Link } from "react-router-dom";

type FormRowProps = {
  joined?: boolean;
  label: string;
  labelMain?: string;
  type: string;
  placeholder?: string;
  value?: string | boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheck?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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
  handleCheck,
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
            value={value as string}
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
          <label
            htmlFor={label}
            className='capitalize text-[0.94rem] font-bold'
          >
            {labelMain}
          </label>
        </div>
        {description && (
          <p className={`${descriptionClass || "text-sm text-slate-400"} mb-2`}>
            {description}
          </p>
        )}
        <div>
          <input
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            value={value as string}
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
        {description && (
          <p className={`${descriptionClass || "text-sm text-slate-400"} mb-2`}>
            {description}
          </p>
        )}
        <div className='flex space-x-3'>
          <input
            type={type}
            id={label}
            name={label}
            placeholder={placeholder}
            value={value as string}
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
        <label
          htmlFor={label}
          className='flex items-center space-x-3 text-sm font-bold'
        >
          {labelText}
          <input
            type={type}
            id={label}
            name={label}
            onChange={handleChange}
            className='appearance-none peer'
            checked={value as boolean}
          />
          <div
            className='border w-8 h-5 bg-primary_purple rounded-xl relative peer-checked:[&>span]:left-[45%] cursor-pointer'
            onClick={handleCheck}
          >
            <span className='size-4 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-[0.1rem]'></span>
          </div>
        </label>
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
