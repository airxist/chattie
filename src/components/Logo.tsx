import LogoSvg from '../assets/icons/LogoSvg';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <LogoSvg />
      <h3 className='font-semibold text-2xl'>Chattie</h3>
    </div>
  );
};

export default Logo;
