import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./levels/App";
import MLB from "./levels/MLB/mlb"
import NHL from "./levels/nhl"
import { Loader } from "./components/loader/Loader";
export const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader/>} />
          <Route path="/NBA" element={<App/>} />
          <Route path="/MLB" element={<MLB/>} />
          <Route path="/NHL" element={<NHL/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;