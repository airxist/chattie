import { Routes, Route } from "react-router-dom";
import Login from "./routes/onboarding/Login";
import Register from "./routes/onboarding/Register";
import Verify from './routes/onboarding/Verify'
import AddSpace from "./routes/onboarding/AddSpace";
import Selection from "./routes/onboarding/Selection";
import Forgot from "./routes/recover/Forgot";
import Reset from "./routes/recover/Reset";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="verify" element={<Verify />} />
      <Route path="add_space" element={<AddSpace />} />
      <Route path="selection" element={<Selection />} />
      <Route path="forgot_password" element={<Forgot />} />
      <Route path="reset_password" element={<Reset />} />
    </Routes>
  );
};

export default App;
