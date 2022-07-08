import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ButtonPage } from "./pages/Buttons/ButtonPage";
import { Index } from "./pages/Index";
import { InputPage } from "./pages/Input/InputPage";
import WindBnb from "./pages/WindbNb/WindbNbPage";
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/windbnb" element={<WindBnb />} />
      </Routes>
    </BrowserRouter>
  );
};
