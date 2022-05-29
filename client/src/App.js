import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/Private/PrivateRoute";
import EditProfile from "./Pages/EditProfile";
import Home from "./Pages/Home";
import ResumePage from "./Pages/ResumePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
