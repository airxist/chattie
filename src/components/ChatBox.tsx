import { Link } from "react-router-dom";
import Carbon from "../assets/icons/Carbon";

const ChatBox = ({
  username,
  date,
  message,
  important,
  replies,
  type,
}: {
  username?: string;
  date: string;
  message: string;
  important?: boolean;
  replies?: string[];
  type?: string;
}) => {
  // console.log(important);
  const Chats = () => {
    return (
      <div className='flex space-x-4 border bg-primary_purple-1 rounded-md p-3'>
        <div>
          <span className='size-7 bg-primary_purple-3 text-primary_purple3 flex items-center justify-center rounded-full'>
            {username?.substring(0, 1)}
          </span>
        </div>
        <div className='flex flex-col space-y-1'>
          <div className='flex items-center space-x-4'>
            <h2 className='chat-username'>{username}</h2>
            <p className='chat-date'>{date}</p>
            {important && <Carbon />}
          </div>
          <div>
            <p className='chat-msg'>{message}</p>
          </div>
          {replies && replies!.length > 0 && (
            <Link
              to='/chat-board/reply'
              className='text-primary_purple font-medium text-[0.75rem]'
            >
              {replies![0]} and {replies!.length - 1} others
            </Link>
          )}
        </div>
      </div>
    );
  };

  const DMs = () => {
    return (
      <div className='flex space-x-4 border bg-primary_purple-1 rounded-md p-3'>
        <div>
          <span className='size-7 bg-primary_purple-3 text-primary_purple3 flex items-center justify-center rounded-full'>
            {username?.substring(0, 1)}
          </span>
        </div>
        <div className='flex flex-col space-y-1'>
          <div className='flex items-center space-x-4'>
            <h2 className='chat-username'>{username}</h2>
            <p className='chat-date'>{date}</p>
          </div>
          <div>
            <p className='chat-msg'>{message}</p>
          </div>
        </div>
      </div>
    );
  };

  const Anonymous = () => {
    return (
      <div className='bg-primary_purple-1 rounded-md p-3'>
        <div className='flex flex-col space-y-1'>
          <div className='flex items-center space-x-4'>
            <p className='chat-date'>13: 23</p>
            <p className='chat-date'>{date}</p>
          </div>
          <div>
            <p className='chat-msg'>{message}</p>
          </div>
        </div>
      </div>
    );
  };

  return type === "dm" ? DMs() : type === "anonymous" ? Anonymous() : Chats();
};

export default ChatBox;
