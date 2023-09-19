import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className=" bg-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":useId" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
