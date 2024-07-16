import DMs from "../assets/icons/DMs";
import Send from "../assets/icons/Send";
import Button from "./Button";

const TextArea = ({ show }: { show?: boolean }) => {
  return (
    <div className='chat-pad absolute bottom-4 md:bottom-10 w-full'>
      <div className='border border-slate-400 rounded-xl flex items-end relative'>
        {show && (
          <Button className='size-12 border-2 border-primary_purple bg-primary_purple-1 absolute -top-16 right-0 lg:size-16 lg:-top-20 flex-center rounded-md'>
            <DMs stroke='#B934F2' />
          </Button>
        )}
        <textarea
          name='message'
          id='message'
          className='h-[48px] resize-none w-11/12 border-none outline-none text-sm p-3 rounded-s-xl'
          placeholder='Any programme today???'
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            const target = event.currentTarget;
            target.style.height = "48px";
            const scrollHeight = event.currentTarget.scrollHeight;
            if (scrollHeight >= 100) {
              target.style.height = "100px";
              return;
            }
            target.style.height = scrollHeight + "px";
          }}
        ></textarea>
        <Button className='w-1/12 h-[48px] rounded-e-xl flex-center'>
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default TextArea;
