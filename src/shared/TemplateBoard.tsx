import TopBar from "../components/TopBar";

const TemplateBoard = ({ children, topClass } : {children : React.ReactNode, topClass?: string}) => {
  const Template = () => {
    return <section className="min-h-screen">
      <TopBar
        className={topClass}
      />
      { children }
    </section>
  }

  return Template()
};

export default TemplateBoard;
