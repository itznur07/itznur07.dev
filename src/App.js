import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/cursor";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div className='bg-[#1E293B]'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
      <CustomCursor />
    </div>
  );
};

export default App;
