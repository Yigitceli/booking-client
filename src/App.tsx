import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Hotel from "./pages/Hotel";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App w-full flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
