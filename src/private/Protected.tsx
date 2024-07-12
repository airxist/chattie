import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ReactChildren } from '../constants/interfaces';

const Protected = ({ children }: ReactChildren) => {
  const [user] = useState(false);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default Protected;
