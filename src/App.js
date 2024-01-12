import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <div className="wrapper-sidebar-and-main">
        <div className="app-left">
          <Sidebar />
        </div>
        <div className="main-cont">
          <Header />
          <Container />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
