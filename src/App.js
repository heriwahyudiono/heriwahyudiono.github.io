import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import Blog from "./pages/Blog";
import SofwareGratis from "./pages/SofwareGratis";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/software-gratis" element={<SofwareGratis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
