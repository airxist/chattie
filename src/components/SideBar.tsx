import GoToProfile from './GoToProfile';

const SideBar = ({ className }: { className?: string }) => {
  return (
    <aside className={`${className} w-1/5`}>
      <div className="header">The Logo goes hear</div>
      <div>Navigate chat board</div>
      <div>Spaces</div>
      <GoToProfile showLogoutBtn className="w-full border  bg-orange-300 p-8" />
    </aside>
  );
};

export default SideBar;
