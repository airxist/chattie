import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Login = lazy(() => import('./routes/onboarding/Login'))
const Register = lazy(() => import('./routes/onboarding/Register'))
const Verify = lazy(() => import('./routes/onboarding/Verify'))
const AddSpace = lazy(() => import('./routes/onboarding/AddSpace'))
const Selection = lazy(() => import('./routes/onboarding/Selection'))
const Forgot = lazy(() => import('./routes/recover/Forgot'))
const Reset = lazy(() => import('./routes/recover/Reset'))
const Profile = lazy(() => import('./routes/profile/Profile'))

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
      </Routes>
    </Suspense>
  );
};

export default App;
