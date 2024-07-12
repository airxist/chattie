import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ChatNav from "./ChatNav";
import GoToProfile from "./GoToProfile";

const SideBar = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/create_space");
  };
  return (
    <aside className={`w-4/5 sm:w-4/5 md:w-2/6 lg:w-1/5 absolute top-0 left-0 -translate-x-full md:translate-x-0   md:static h-screen z-10 bg-white`}>
      <div className="header bg-slate-200">The Logo goes hear</div>
      <div className="divide-space-nav">
        <ChatNav />
        {/* spaces the user is in */}
        <div className="h-3/5 px-8 py-3">
          <div className="flex items-center justify-between">
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
