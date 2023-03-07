import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Navbar />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
