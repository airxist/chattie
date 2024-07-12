import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ChatNav from "./ChatNav";
import GoToProfile from "./GoToProfile";

const SideBar = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/create_space");
  };
  return (
    <aside className={`${className} w-1/5 h-screen border border-yellow-800`}>
      <div className="header bg-slate-200">The Logo goes hear</div>
      <div className="divide-space-nav">
        <ChatNav />
        {/* spaces the user is in */}
        <div className="h-3/5 ps-8 py-3">
          <div className="flex items-center space-x-10">
            <p className="font-semibold">Spaces</p>
            <Button
              text="+Add new space"
              className="text-primary_purple"
              handleClick={navigateToCreate}
            />
          </div>
        </div>
      </div>
      <GoToProfile showLogoutBtn className="px-8 py-3 h-[110px] bg-slate-200" />
    </aside>
  );
};

export default SideBar;
