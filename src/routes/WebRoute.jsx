import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import TodoList from "../pages/todoList/TodoList";
import Detail from "../pages/detail/Detail";
import About from "../pages/about/About";

export const ThemeContext = createContext();

export default function WebRoute() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeButton = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ isDarkTheme, themeButton }}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo-list" element={<TodoList />} />
              <Route path="/list-detail/:id" element={<Detail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}
