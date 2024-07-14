const barData: { className: string }[] = [
  { className: "bar h-2/6" },
  { className: "bar h-4/6" },
  { className: "bar h-full" },
];

const Bars = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} absolute h-[113px] md:h-[214px] w-[9rem] md:w-[20rem] flex justify-between -z-10`}
    >
      {barData.map((bar, index) => {
        return (
          <div key={index} className={`${bar.className} w-[calc(9rem/3.5)] md:w-[calc(20rem/3.5)]`} />
        );
      })}
    </div>
  );
};

export default Bars;
