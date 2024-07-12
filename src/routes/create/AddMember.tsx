import { useLocation, useNavigate } from 'react-router-dom';
import TemplateBoard from '../../shared/TemplateBoard';
import { useGlobalContext } from '../../utils/context';
import { AppContextType } from '../../constants/interfaces';
import { useEffect, useRef } from 'react';
import FormRow from '../../components/FormRow';
import { friends } from '../../constants';
import Friend from '../../components/Friend';
import Button from '../../components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AddMember = () => {
  const navigate = useNavigate();
  const ContainerRef = useRef(null);
  const location = useLocation();
  const { setTitle, direction } = useGlobalContext() as AppContextType;

  useEffect(() => {
    location.pathname === '/create_space/add_member' && setTitle('Add Member');
  }, [location.pathname, setTitle]);

  useGSAP(() => {
    gsap.from(ContainerRef.current, {
      x: direction === 'forward' ? 1000 : -1000,
      duration: 0.5,
      autoAlpha: 0,
    });
  }, []);

  const nextPage = () => {
    gsap.to(ContainerRef.current, {
      x: direction === 'forward' ? -1000 : 1000,
      autoAlpha: 1,
      delay: 0.5,
      onComplete() {
        navigate('/create_space/who_can_see');
      },
    });
  };

  return (
    <TemplateBoard
      topClass="border-b border-b-slate-500 absolute top-0 left-0 z-10 bg-white w-full"
      topBarRef={ContainerRef}
      showBars>
      <div className="px-5 md:px-32 min-h-screen pt-28 md:flex items-start justify-center overflow-hidden">
        <div ref={ContainerRef}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full md:w-[37rem]">
            <FormRow
              label="find"
              type="text"
              placeholder="Search People"
              joined
            />
          </form>

          <div className="mt-6">
            <div className="flex flex-col space-y-3">
              {friends.map((friend) => {
                return <Friend key={friend} friendName={friend} />;
              })}
            </div>
          </div>

          <Button
            text="Done"
            className="primary-btn px-5 mt-12 rounded-lg"
            handleClick={nextPage}
          />
        </div>
      </div>
    </TemplateBoard>
  );
};

export default AddMember;
