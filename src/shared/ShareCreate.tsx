import { Outlet } from "react-router-dom";
import TemplateBoard from "./TemplateBoard";

const ShareCreate = () => {
  return (
    <>
      <TemplateBoard
        topClass='border-b border-b-primary_purple-3 absolute top-0 left-0 z-10 bg-white w-full'
        // topBarRef={ContainerRef}
        showBars
      >
        <Outlet />
      </TemplateBoard>
    </>
  );
};

export default ShareCreate;
