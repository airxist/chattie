const Friend = ({ friendName }: { friendName: string }) => {
  return (
    <div className='flex items-center'>
      <span className='size-5 border border-dark'></span>
      <span className='rounded-full ml-5 bg-primary_purple-3 w-7 h-7 flex items-center justify-center  text-primary_purple font-bold text-sm'>
        {friendName.substring(0, 1)}
      </span>
      <p className='ml-3 font-semibold text-sm'>{friendName}</p>
    </div>
  );
};

export default Friend;
