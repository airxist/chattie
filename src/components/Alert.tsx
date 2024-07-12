import { useGlobalContext } from '../utils/context';
import { AppContextType } from '../constants/interfaces';

const Alert = () => {
  const { alarm } = useGlobalContext() as AppContextType;
  const { type, message } = alarm;
  return (
    <div
      className={`absolute transition -translate-x-5 top-10 right-20 px-3 py-2 rounded-md bg-primary_purple-3 border shadow-lg ${type === 'danger' ? 'border-primary_red' : 'border-primary_purple'}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
