const Friend = ({ friendName }: { friendName: string }) => {
  return (
    <div className="flex items-center">
      <span className="w-7 border border-dark-1 h-7"></span>
      <span className="rounded-full ml-5 bg-primary_purple-3 w-7 h-7 flex items-center justify-center  text-primary_purple font-bold text-sm">
        {friendName.substring(0, 1)}
      </span>
      <p className="ml-3 font-medium">{friendName}</p>
    </div>
  );
};

export default Friend;
