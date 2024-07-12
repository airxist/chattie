import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// create routes
import Create from './routes/create/Create';
import ShareCreate from './shared/ShareCreate';
import AddMember from './routes/create/AddMember';
import WhoCanSee from './routes/create/WhoCanSee';
import Chat from './routes/chatboard/Chat';
import ChatBoard from './shared/ChatBoard';
// onboarding
const Login = lazy(() => import('./routes/onboarding/Login'));
const Register = lazy(() => import('./routes/onboarding/Register'));
const Verify = lazy(() => import('./routes/onboarding/Verify'));
const AddSpace = lazy(() => import('./routes/onboarding/AddSpace'));
const Selection = lazy(() => import('./routes/onboarding/Selection'));
//recover route
const Forgot = lazy(() => import('./routes/recover/Forgot'));
const Reset = lazy(() => import('./routes/recover/Reset'));
// profile
const Profile = lazy(() => import('./routes/profile/Profile'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/add_space" element={<AddSpace />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/forgot_password" element={<Forgot />} />
        <Route path="/reset_password" element={<Reset />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create_space" element={<ShareCreate />}>
          <Route index element={<Create />} />
          <Route path="add_member" element={<AddMember />} />
          <Route path="who_can_see" element={<WhoCanSee />} />
        </Route>
        <Route path="/chat-board" element={<ChatBoard />}>
          <Route index element={<Chat />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
