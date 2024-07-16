import { useEffect } from "react";
import DisplayChats from "../../components/DisplayChats";
import { AppContextType } from "../../constants/interfaces";
import { useGlobalContext } from "../../utils/context";
import TextArea from "../../components/TextArea";
// import { chatLists } from "../../constants";

const DMs = () => {
  const { userSpaces, spaceToDisplay, chatData, chatPage, setChatPage } =
    useGlobalContext() as AppContextType;

  useEffect(() => {
    const getSpaceDetail = userSpaces.find(
      (space) => space.id === spaceToDisplay
    );
    const getChatListId = getSpaceDetail?.id;
    const getChats = chatData.find((data) => data.id === getChatListId);
    setChatPage({
      id: getSpaceDetail!.id,
      title: getSpaceDetail!.title,
      description: getSpaceDetail!.description,
      active: getSpaceDetail!.active,
      chatLists: getChats?.channels.dms,
    });
  }, [spaceToDisplay]);

  return (
    <>
      <div className='border h-full overflow-y-scroll pb-20 md:pb-32 pt-6 chat-pad relative'>
        <DisplayChats
          description={chatPage.description}
          chatList={chatPage.chatLists}
          typeOfChatBox='dm'
        />
      </div>

      <TextArea show />
    </>
  );
};

export default DMs;
