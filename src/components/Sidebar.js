import React from "react";
import { auth } from "../firebase";
import "./styleSheets/sidebar.css";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name,
      followers: 0,
      following: 0,
      tweets: 0,
    };
  }
  render() {
    return (
      <div id="sidebarContainer">
        <div id="profileInfo">
          <div id="usernameHolder">
            <h2>{this.state.username}</h2>
          </div>
          <div id="details">
            <div>
              <p>Followers</p>
              <p>{this.state.followers}</p>
            </div>
            <div>
              <p>Following</p>
              <p>{this.state.following}</p>
            </div>
            <div>
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
            <li className="actionButtons">
              <button onClick={() => auth.signOut()}>Signout</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
