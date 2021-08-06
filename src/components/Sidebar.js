import React from "react";
import { auth } from "../firebase";
import "./styleSheets/sidebar.css";
import firebase from "firebase";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      followers: 0,
      following: 0,
      tweets: 0,
    };
    let userIcon = this.state.username.charAt(0);
  }

  render() {
    return (
      <div id="sidebarContainer">
        <div id="profileInfo">
          <div id="userIconandNameDiv">
            <div id="profileIcon">
              {this.state.username.charAt(0).toUpperCase()}
            </div>
            <div id="usernameHolder">
              <h2>{this.state.username}</h2>
            </div>
          </div>
          <div id="details">
            <div className="DetailDiv">
              <p>Followers</p>
              <p>{this.state.followers}</p>
            </div>
            <div className="DetailDiv">
              <p>Following</p>
              <p>{this.state.following}</p>
            </div>
            <div className="DetailDiv">
              <p>Tweets</p>
              <p>{this.state.tweets}</p>
            </div>
          </div>
        </div>
        <div id="actionsBar">
          <ul id="actionsList">
            <li className="actionButtons">Home</li>
            <li className="actionButtons">Explore</li>
            <li className="actionButtons">Messages</li>
            <li className="actionButtons">Notifications</li>
            <li className="actionButtons">Bookmarks</li>
            <li className="actionButtons">Lists</li>
            <li className="actionButtons">Profile</li>

            <li className="actionButtons">
              <button onClick={() => auth.signOut()} id="signOutButton">
                Signout
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
