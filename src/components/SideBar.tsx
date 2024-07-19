import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ChatNav from "./ChatNav";
import GoToProfile from "./GoToProfile";
import Logo from "./Logo";
import UserSpaces from "./UserSpaces";
import { useGlobalContext } from "../utils/context";
import { AppContextType } from "../constants/interfaces";
import Close from "../assets/icons/Close";

const SideBar = () => {
  const navigate = useNavigate();

  const {
    userSpaces,
    setUserSpaces,
    setSpaceToDisplay,
    showSideBar,
    closeSideBar
  } = useGlobalContext() as AppContextType;

  const navigateToCreate = () => {
    navigate("/create_space");
  };

  const handleClick = (id: number) => {
    setUserSpaces((previous) => {
      return previous.map((space) => {
        return space.id === id
          ? { ...space, active: true }
          : { ...space, active: false };
      });
    });
    // change the space chats to be displayed
    setSpaceToDisplay(id);
  };


  return (
    <aside
      className={`w-4/5 sm:w-4/5 md:w-2/6 lg:w-1/5 absolute top-0 left-0 ${showSideBar ? 'translate-x-0' : '-translate-x-full'} transition-transform md:translate-x-0   md:static h-screen z-10 bg-white`}
    >
      <div className='header bg-primary_purple-2 px-8 py-5 flex items-center justify-between'>
        <Logo className='flex items-center space-x-3' />
        <Button className='md:hidden' handleClick={closeSideBar}>
          <Close />
        </Button>
      </div>
      <div className='divide-space-nav'>
        <ChatNav />
        {/* spaces the user is in */}
        <div className='h-3/5 px-8 py-3'>
          <div className='flex items-center justify-between'>
            <p className='font-medium text-[0.94rem]'>Spaces</p>
            <Button
              text='+Add new'
              className='text-primary_purple text-[0.75rem] font-medium'
              handleClick={navigateToCreate}
            />
          </div>
          <div className='my-2'>
            {userSpaces.map((space) => {
              return (
                <UserSpaces
                  key={space.id}
                  {...space}
                  className='mb-2'
                  handleClick={() => handleClick(space.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <GoToProfile
        showLogoutBtn
        className='px-8 py-3 h-[110px] bg-primary_purple-2'
      />
    </aside>
  );
};

export default SideBar;
