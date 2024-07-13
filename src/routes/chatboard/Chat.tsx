import Send from "../../assets/icons/Send";
import Button from "../../components/Button";
import DisplayChats from "../../components/DisplayChats";
import { chatLists } from "../../constants";

const Chat = () => {
  return (
    <section className='main-board'>
      <div className='h-full relative'>
        <div className='border h-full overflow-y-scroll pb-20 md:pb-32 pt-6 px-10 relative'>
          <DisplayChats
            description='At NielBs, all communication is strictly business based. Nothing outside busines'
            chatList={chatLists}
            addSwitch
          />
        </div>

        <div className="px-10 absolute bottom-0 md:bottom-10 w-full">
          <div className='border overflow-hidden border-slate-400 rounded-xl flex items-end'>
            <textarea
              name='message'
              id='message'
              className='h-[48px] resize-none w-11/12 border-none outline-none text-sm p-3'
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
            <Button className='w-1/12 h-[48px] bg-yellow-300 flex items-center justify-center'>
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
