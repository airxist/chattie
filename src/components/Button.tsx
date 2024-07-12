const Button = ({
  text,
  className,
  handleClick,
  children,
}: {
  text?: string;
  className?: string;
  handleClick?: () => void;
  children?: React.ReactNode;
}) => {
  const Btn = () => {
    return (
      <button
        type="submit"
        className={`${className || 'block w-full bg-slate-400'} h-9 rounded-sm`}
        onClick={handleClick}>
        {text}
      </button>
    );
  };

  const Back = () => {
    return (
      <button className={`${className} p-2`} onClick={handleClick}>
        {/* {icon && icon} */}
        {children}
      </button>
    );
  };

  return children ? Back() : Btn();
};

export default Button;
