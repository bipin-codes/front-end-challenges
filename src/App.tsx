import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ButtonPage } from "./pages/Buttons/ButtonPage";
import { Index } from "./pages/Base";
import { InputPage } from "./pages/Input/InputPage";
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/button" element={<ButtonPage />}></Route>
          <Route path="/input" element={<InputPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
