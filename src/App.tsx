import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ButtonPage } from "./pages/Buttons/ButtonPage";
import CountryPage from "./pages/CountryQuiz/CountryPage";
import { Index } from "./pages/Index";
import { InputPage } from "./pages/Input/InputPage";
import QuoteList from "./pages/Quote/QuoteList/QuoteList";
import { QuotePage } from "./pages/Quote/QuotePage";
import TodoPage from "./pages/Todo/TodoPage";
import WindBnb from "./pages/WindbNb/WindbNbPage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/windbnb" element={<WindBnb />} />
        <Route path="/todo" element={<TodoPage />} />

        <Route path="/quote" element={<QuotePage />}></Route>
        <Route path="/quote/:id" element={<QuoteList />}></Route>
        <Route path="/country" element={<CountryPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
