import Bars from "../components/Bars";
import TopBar from "../components/TopBar";

const TemplateBoard = ({
  children,
  topClass,
  showBars,
  topBarRef,
}: {
  children: React.ReactNode;
  topClass?: string;
  showBars?: boolean;
  topBarRef?: React.MutableRefObject<null>;
}) => {
  const Template = () => {
    return (
      <section className='min-h-screen'>
        <TopBar className={topClass} reference={topBarRef} />
        {showBars && <Bars className='rotate-180 bottom-0 left-0' />}
        {children}
      </section>
    );
  };

  return Template();
};

export default TemplateBoard;
