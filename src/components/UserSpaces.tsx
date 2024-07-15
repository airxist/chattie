import Bullet from '../assets/icons/Bullet';
import SpaceCTA from './SpaceCTA';

const UserSpaces = ({
  title,
  show,
  description,
  className,
  user,
}: {
  title: string;
  show?: boolean;
  description?: string;
  className?: string;
  user: boolean;
}) => {
  return (
    <div className={`${className} flex space-x-5 items-start`}>
      <div className="mt-2">
        <Bullet size="20" fillColor='#B934F2' />
      </div>
      <div>
        <div className="flex items-center space-x-10">
          <h4 className="font-bold text-[0.94rem]">{title}</h4>
          {show && <SpaceCTA user={user} />}
        </div>
        {show && (
          <div>
            <p className='text-sm'>{description ? description : 'No description for now'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSpaces;
