import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// create routes
import Create from "./routes/create/Create";
import ShareCreate from "./shared/ShareCreate";
import AddMember from "./routes/create/AddMember";
import WhoCanSee from "./routes/create/WhoCanSee";
import Chat from "./routes/chatboard/Chat";
import ChatBoard from "./shared/ChatBoard";
import DMs from "./routes/chatboard/DMs";
import Anonymous from "./routes/chatboard/Anonymous";
import Protected from "./private/Protected";
// onboarding
const Login = lazy(() => import("./routes/onboarding/Login"));
const Register = lazy(() => import("./routes/onboarding/Register"));
const Verify = lazy(() => import("./routes/onboarding/Verify"));
const AddSpace = lazy(() => import("./routes/onboarding/AddSpace"));
const Selection = lazy(() => import("./routes/onboarding/Selection"));
//recover route
const Forgot = lazy(() => import("./routes/recover/Forgot"));
const Reset = lazy(() => import("./routes/recover/Reset"));
// profile
const Profile = lazy(() => import("./routes/profile/Profile"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/add_space' element={<AddSpace />} />
        <Route path='/selection' element={<Selection />} />
        <Route path='/forgot_password' element={<Forgot />} />
        <Route path='/reset_password' element={<Reset />} />
        <Route
          path='/profile'
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route path='/create_space' element={<ShareCreate />}>
          <Route
            index
            element={
              <Protected>
                <Create />
              </Protected>
            }
          />
          <Route
            path='add_member'
            element={
              <Protected>
                <AddMember />
              </Protected>
            }
          />
          <Route
            path='who_can_see'
            element={
              <Protected>
                <WhoCanSee />
              </Protected>
            }
          />
        </Route>
        <Route path='/chat-board' element={<ChatBoard />}>
          <Route
            index
            element={
                <Chat />
            }
          />
          <Route
            path='dms'
            element={
              <Protected>
                <DMs />
              </Protected>
            }
          />
          <Route
            path='anonymous'
            element={
              <Protected>
                <Anonymous />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
