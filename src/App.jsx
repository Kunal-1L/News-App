import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          top: "3.5rem",
          backgroundColor: "white",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
