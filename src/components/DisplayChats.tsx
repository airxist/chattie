import ChatBox from "./ChatBox";
import Switching from "./Switching";

interface DisplayChatsProps {
  description?: string;
  chatList?: {
    username: string;
    date: string;
    message: string;
    important: boolean;
    replies?: string[];
  }[];
  addSwitch?: boolean;
  typeOfChatBox?: string;
}

const DisplayChats = ({
  description,
  chatList,
  addSwitch,
  typeOfChatBox,
}: DisplayChatsProps) => {
  return (
    <div>
      {description && <p>{description}</p>}
      <Switching
        chat
        className='sticky top-0 left-0 bg-white'
        addSwitch={addSwitch}
      />
      <div className='flex flex-col space-y-4'>
        {chatList!.map((chat, index) => {
          return <ChatBox key={index} {...chat} type={typeOfChatBox} />;
        })}
      </div>
    </div>
  );
};

export default DisplayChats;
