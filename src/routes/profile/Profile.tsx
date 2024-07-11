import { useState } from "react";
import avatar from "../../assets/images/avatar.jpg";
import ProfileBoard from "../../shared/ProfileBoard";
import Button from "../../components/Button";
import { spaces } from "../../constants";
import UserSpaces from "../../components/UserSpaces";

const Profile = () => {
  const [online] = useState(true);
  const [user] = useState(true);

  return (
    <ProfileBoard>
      <div className="px-5 md:px-32 py-3 md:py-10">
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-5 md:items-center">
            <div className="w-20 md:w-40 aspect-square">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <p className={`${online ? 'text-primary_purple' : 'text-primary_red'} font-semibold`}> <span></span> {online ? 'Online' : 'Offline'}</p>
              <h4 className="text-xl font-semibold md:text-2xl">Titilope Adewumi</h4>
              <p>titilopeade@gmail.com</p>
              {user && <p className="italic">admin</p>}
              <div className="flex items-center space-x-4 mt-2">
                <Button
                  text={user ? 'Edit Profile' : 'Message name'}
                  className={`text-primary_purple ${user ? '' : 'border border-primary_purple rounded-lg py-1 px-3'}`}
                />
                <Button
                  text={user ? 'Reset Password' : 'Invite to a space'}
                  className={`${user ? 'text-primary_red ' : 'text-primary_purple'}`}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-300 mt-10 pt-5">
            <div className="flex items-center space-x-10">
              <p className="font-semibold">{user ? 'My Spaces' : 'Common Spaces'}</p>
              {user && <Button text="+Add new space" className="text-primary_purple font-medium" />}
            </div>
            <div>
              {
                spaces.map((space, index) => {
                  return <UserSpaces
                    key={space.id}
                    {...space}
                    className={`${index > 0 && 'mt-3'}`}
                    show
                    user={user}
                  />
                })
              }
            </div>
          </div>
      </div>
    </ProfileBoard>
  );
};

export default Profile;
