import React from "react";
import { NavBar } from "../components/NavBar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[7.5vh]">
        <NavBar />
      </div>
      <div className="h-[92.5vh]">
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
