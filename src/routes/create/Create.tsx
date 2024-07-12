import { useLocation, useNavigate } from 'react-router-dom';
import FormRow from '../../components/FormRow';
import TemplateBoard from '../../shared/TemplateBoard';
import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../../utils/context';
import { AppContextType } from '../../constants/interfaces';
import Button from '../../components/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Create = () => {
  const navigate = useNavigate();

  const FormRef = useRef(null);

  const location = useLocation();

  const { setTitle, direction } = useGlobalContext() as AppContextType;
  const [screenSize, setScreenSize] = useState(
    window.innerWidth < 600 ? 'small' : 'large',
  );

  useGSAP(() => {
    gsap.from(FormRef.current, {
      x: direction === 'forward' ? 1000 : -1000,
      duration: 0.5,
      autoAlpha: 0,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    gsap.to(FormRef.current, {
      x: direction === 'forward' ? -1000 : 1000,
      autoAlpha: 1,
      delay: 0.5,
      onComplete() {
        navigate('add_member');
      },
    });
  };

  useEffect(() => {
    location.pathname === '/create_space' && setTitle('Create New Space');
  }, [location.pathname, setTitle]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const widthSize = window.innerWidth;
      setScreenSize(widthSize < 600 ? 'small' : 'large');
    });
    // clean up funtion
    return () => {
      window.removeEventListener('resize', () => {
        console.log('Removed event listener');
      });
    };
  }, []);

  return (
    <TemplateBoard
      topClass="border-b border-b-slate-500 absolute top-0 left-0 z-10 bg-white w-full"
      topBarRef={FormRef}
      showBars>
      <div className="px-5 md:px-32 min-h-screen pt-28 md:flex items-start justify-center overflow-hidden">
        <form
          ref={FormRef}
          className="md:w-[37rem] flex flex-col space-y-3 md:"
          onSubmit={handleSubmit}>
          {/* single form row */}
          <FormRow
            label="space"
            labelMain="Space Name"
            type="text"
            value="Niel Business Solutions"
          />
          {/* single form row */}
          <FormRow
            label="short"
            labelMain="Short Name"
            type="text"
            value="NielBs"
          />
          {/* single form row */}
          <div>
            <FormRow
              label="description"
              labelMain="Description"
              type="text"
              value="Strictly Business"
              description="Write a short description for your invitees to get a sneak peek of what is going on here"
            />
            <div className="border border-orange-500">
              <p className="text-end font-medium">30/200</p>
            </div>
          </div>
          {/* single form row */}
          <FormRow
            label="anonymous"
            type="checkbox"
            labelText="Add Anonymous"
            check
          />
          <div className="flex flex-col items-start space-y-5 md:space-y-0 md:flex-row  md:items-center">
            <Button
              text={`${screenSize === 'small' ? 'Invite Your Friends' : 'Proceed to invite'}`}
              className="primary-btn w-full md:w-3/5"
            />

            <Button
              text="Skip"
              className="secondary-btn w-full md:w-1/5 border border-blue-800"
            />
          </div>
        </form>
      </div>
    </TemplateBoard>
  );
};

export default Create;
