import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const ChatBoard = () => {
  return (
    <section className="flex">
      <SideBar />
      <div>
        <div>Top Bar</div>
        <Outlet />
      </div>
    </section>
  );
};

export default ChatBoard;
