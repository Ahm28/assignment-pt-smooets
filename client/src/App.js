import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/Private/PrivateRoute";
import Home from "./Pages/Home";
import ResumePage from "./Pages/ResumePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/resume" element={<ResumePage />} />
      </Route>
    </Routes>
  );
}

export default App;
