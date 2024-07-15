import { useState } from "react";
import avatar from "../../assets/images/avatar.jpg";
import TemplateBoard from "../../shared/TemplateBoard";
import Button from "../../components/Button";
import { spaces } from "../../constants";
import UserSpaces from "../../components/UserSpaces";
import { useNavigate } from "react-router-dom";
import Bullet from "../../assets/icons/Bullet";

const Profile = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/create_space");
  };

  const [online] = useState(false);
  const [user] = useState(true);

  return (
    <TemplateBoard topClass='border-b border-b-primary_purple-3'>
      <div className='px-5 md:px-32 py-3 md:py-10'>
        <div className='flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-5 md:items-center'>
          <div className='w-20 md:w-40 aspect-square'>
            <img
              src={avatar}
              alt='avatar'
              className='w-full h-full object-cover object-center'
            />
          </div>

          <div className='flex flex-col space-y-[6px]'>
            <p
              className={`${online ? "text-primary_purple" : "text-primary_red"} font-semibold flex items-center gap-x-1 text-sm`}
            >
              {" "}
              <span>
                <Bullet
                  size='15'
                  fillColor={`${online ? "#B934F2" : "#EC4242"}`}
                />
              </span>{" "}
              {online ? "Online" : "Offline"}
            </p>
            <h4 className='title profile-title'>Titilope Adewumi</h4>
            <p className='text-sm'>titilopeade@gmail.com</p>
            {user && <p className='italic text-sm'>admin</p>}
            <div className='flex items-center space-x-4 mt-2'>
              <Button
                text={user ? "Edit Profile" : "Message name"}
                className={`text-primary_purple ${user ? "" : "border border-primary_purple rounded-lg py-1 px-3"} text-[0.75rem]`}
              />
              <Button
                text={user ? "Reset Password" : "Invite to a space"}
                className={`${user ? "text-primary_red " : "text-primary_purple"} text-[0.75rem]`}
              />
            </div>
          </div>
        </div>

        <div className='border-t border-primary_purple-2 mt-10 pt-5'>
          <div className='flex items-center space-x-10'>
            <p className='font-bold text-[0.94rem]'>
              {user ? "My Spaces" : "Common Spaces"}
            </p>
            {user && (
              <Button
                text='+Add new space'
                className='text-primary_purple font-medium text-[0.75rem]'
                handleClick={navigateToCreate}
              />
            )}
          </div>
          <div>
            {spaces.map((space, index) => {
              return (
                <UserSpaces
                  key={space.id}
                  {...space}
                  className={`${index > 0 && "mt-3"}`}
                  show
                  user={user}
                />
              );
            })}
          </div>
        </div>
      </div>
    </TemplateBoard>
  );
};

export default Profile;
