import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import DownloadButton from "./components/Download";
import Layout from "./components/Layout";
import CustomCursor from "./components/cursor";
import About from "./pages/About";
import Home from "./pages/Home";
import Protfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";

const App = () => {
  const { mode } = useSelector((state) => state.theme);

  return (
    <div className={`bg-[${mode.bg}]`}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Protfolio />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
      <CustomCursor />
      <DownloadButton />
    </div>
  );
};

export default App;
