import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div className="mainDiv">
      <div className="wrapper-sidebar-and-main">
        <div className="app-left">
          <Sidebar />
        </div>
        <div className="main-cont">
          <MainRoutes />
        </div>
      </div>
      <Layout />
    </div>
  );
};

export default App;
