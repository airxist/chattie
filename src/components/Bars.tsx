const Bars = ({
  className
} : {
  className: string
}) => {
  return (
    <div
      className={`${className} absolute h-[7rem] w-60 flex justify-between -z-10`}
    >
      <div className="bar h-3/6 w-[calc(15rem/3.5)]"></div>
      <div className="bar h-3/4 w-[calc(15rem/3.5)]"></div>
      <div className="bar h-full w-[calc(15rem/3.5)]"></div>
    </div>
  );
}

export default Bars
