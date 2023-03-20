import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/cursor";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div className='bg-[#1E293B]'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <CustomCursor />
    </div>
  );
};

export default App;
