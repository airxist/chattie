import { useLocation, useNavigate } from "react-router-dom";
import FormRow from "../../components/FormRow";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../utils/context";
import { AppContextType } from "../../constants/interfaces";
import Button from "../../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Create = () => {
  const navigate = useNavigate();

  const FormRef = useRef(null);

  const { pathname } = useLocation();

  const [screenSize, setScreenSize] = useState(
    window.innerWidth < 600 ? "small" : "large"
  );

  const [formData, setFormData] = useState({
    space: "",
    short: "",
    description: "",
    anonymous: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentId = event.currentTarget.id;
    const currentValue = event.currentTarget.value;
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [currentId]: currentValue,
      };
    });
  };

  const handleCheck = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.currentTarget.translate)
    setFormData((prev) => ({
      ...prev,
      anonymous: !prev.anonymous,
    }));
  };

  const { setTitle, direction } = useGlobalContext() as AppContextType;

  useGSAP(() => {
    gsap.from(FormRef.current, {
      x: direction === "forward" ? 1000 : -1000,
      duration: 0.5,
      autoAlpha: 0,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    gsap.to(FormRef.current, {
      x: direction === "forward" ? -1000 : 1000,
      autoAlpha: 1,
      delay: 0.5,
      onComplete() {
        navigate("add_member");
      },
    });
  };

  useEffect(() => {
    pathname === "/create_space" && setTitle("Create New Space");
  }, [pathname, setTitle]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const widthSize = window.innerWidth;
      setScreenSize(widthSize < 600 ? "small" : "large");
    });
    // clean up function
    return () => {
      window.removeEventListener("resize", () => {
        console.log("Removed event listener");
      });
    };
  }, []);

  return (
    <div className=' border-8 px-5 md:px-32 pt-28 md:pt-0 min-h-screen md:flex-center overflow-hidden'>
      <form
        ref={FormRef}
        className='w-full md:w-[37rem] flex flex-col space-y-3 md:'
        onSubmit={handleSubmit}
      >
        {/* single form row */}
        <FormRow
          label='space'
          labelMain='Space Name'
          type='text'
          placeholder='NielBusinessSolutions'
          value={formData.space}
          handleChange={handleChange}
        />
        {/* single form row */}
        <FormRow
          label='short'
          labelMain='Short Name'
          type='text'
          placeholder="NielBs"
          value={formData.short}
          handleChange={handleChange}
        />
        {/* single form row */}
        <div>
          <FormRow
            label='description'
            labelMain='Description'
            type='text'
            placeholder="...write a short description"
            description='Write a short description for your invitees to get a sneak peek of what is going on here'
            value={formData.description}
            handleChange={handleChange}
          />
          <div>
            <p className='text-end font-normal text-dark-1'>30/200</p>
          </div>
        </div>
        {/* single form row for check button */}
        <FormRow
          label='anonymous'
          type='checkbox'
          labelText='Add Anonymous'
          value={formData.anonymous}
          handleCheck={handleCheck}
          check
        />
        <div className='flex flex-col items-start space-y-5 md:space-y-0 md:flex-row  md:items-center md:space-x-4'>
          <Button
            text={`${screenSize === "small" ? "Invite Your Friends" : "Proceed to invite"}`}
            className='primary-btn w-full md:w-3/5'
          />

          <Button text='Skip' className='secondary-btn w-full md:w-1/5' />
        </div>
      </form>
    </div>
  );
};

export default Create;
