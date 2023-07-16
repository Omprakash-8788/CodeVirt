import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import IndexHome from "./components/HomePage";
import ThirdIndex from "./components/ThirdHome";
import FourthHomeIndex from "./components/FourthHome";
import FifthpageIndex from "./components/FifthHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecondHomeIndex from "./components/SecondHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<IndexHome />} />
          <Route path="About" element={<SecondHomeIndex />} />
          <Route path="Blog" element={<ThirdIndex />} />
          <Route path="Contact" element={<FourthHomeIndex />} />
          <Route path="Services" element={<FifthpageIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
