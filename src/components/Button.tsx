const Button = ({ text, className }: { text: string; className?: string }) => {
  const submitBtn = () => {
    return (
      <button
        type="submit"
        className={`${
          className ||  "block w-full bg-slate-400"
        } h-9 rounded-sm`}
      >
        {text}
      </button>
    );
  };

  return submitBtn();
};

export default Button;
