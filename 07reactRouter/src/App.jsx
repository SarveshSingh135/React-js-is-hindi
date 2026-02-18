import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/User/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userid" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
