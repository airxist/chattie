import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import ChatNav from "../components/ChatNav";

const ChatBoard = () => {
  return (
    <section className="flex isolate">
      <SideBar />
      <div className="w-full sm:w-full md:w-4/6 lg:w-4/5">
        <TopBar className="border bg-slate-200" chat />
        <Outlet />
        <ChatNav
          className="border border-primary_purple-4 flex justify-center h-[60px] items-center space-x-3 overflow-hidden md:hidden"
          linkClassName="border flex flex-col items-center text-sm"
        />
      </div>
    </section>
  );
};

export default ChatBoard;
