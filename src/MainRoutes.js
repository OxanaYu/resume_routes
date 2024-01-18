import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Stack from "./components/Stack";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/experience" element={<Container />} />
      <Route path="/" element={<Header />} />

      <Route path="*" element={<NotFound />} />

      <Route path="/skills" element={<Stack />} />
    </Routes>
  );
};

export default MainRoutes;
