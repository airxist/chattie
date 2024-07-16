import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import ChatNav from "../components/ChatNav";
import { useGlobalContext } from "../utils/context";
import { AppContextType } from "../constants/interfaces";
import { useEffect } from "react";

const ChatBoard = () => {
  const { userSpaces, setTitle, spaceToDisplay } = useGlobalContext() as AppContextType;

  useEffect(() => {
    const activeSpace = userSpaces.find((space) => {
      return space.active;
    });
    const activeTitle = activeSpace?.title as string
    setTitle(activeTitle);
  }, [spaceToDisplay]);

  return (
    <section className='flex isolate'>
      <SideBar />
      <div className='w-full sm:w-full md:w-4/6 lg:w-4/5'>
        <TopBar className='bg-primary_purple-2 chat-pad' chat />

        <section className='main-board'>
          <div className='h-full relative'>
            <Outlet />
          </div>
        </section>

        <ChatNav
          className='flex-center h-[60px] space-x-3 overflow-hidden md:hidden'
          linkClassName='flex flex-col items-center text-sm'
        />
      </div>
    </section>
  );
};

export default ChatBoard;
