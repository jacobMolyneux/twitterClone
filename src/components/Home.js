import React from "react";
import { auth } from "../firebase";
import Navbar from "./NavBar.js";
import Sidebar from "./Sidebar.js";
import TweetDisplay from "./tweetsDisplay.js";
import "./styleSheets/home.css";
import firebase from "firebase";

const Home = () => {
  const user = firebase.auth().currentUser;
  return (
    <div>
      <Navbar />
      <div id="appContents">
        <Sidebar username={user.email} />
        <TweetDisplay />
      </div>
    </div>
  );
};
export default Home;
