import React from "react";
import { auth } from "../firebase";
import Navbar from "./NavBar.js";
import Sidebar from "./Sidebar.js";
import TweetDisplay from "./tweetsDisplay.js";
import "./styleSheets/home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="appContents">
        <Sidebar />
        <TweetDisplay />
      </div>
    </div>
  );
};
export default Home;
