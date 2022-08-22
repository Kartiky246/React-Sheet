import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/add" element={<Add/>} />
          <Route exact path="/edit/:rowIndex" element={<Edit/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;