import React from "react";

import TweetMap from "./tweetMap.js";
import "./styleSheets/tweetDisplay.css";
import firebase from "firebase";
import { auth } from "../firebase";
// Import Admin SDK
// const auth = firebaseApp.auth();

// Get a database reference to our blog

function writeUserData(userId, name, email, tweet) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      username: name,
      email: email,
      tweet: tweet,
    });
}

export default class TweetDisplay extends React.Component {
  constructor() {
    super();
    const user = firebase.auth().currentUser;
    this.state = {
      newestTweet: "",
      tweetList: [
        "This is a twitter Clone",
        "I hope that you like it",
        "You can see more things I've made on my github in at: https://github.com/jacobMolyneux",
        "tweet4",
      ],
      userId: user.id,
      userName: "",
      email: user.email,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ newestTweet: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tweetList: this.state.tweetList.concat(this.state.newestTweet),
    });
    e.target.value = "";
    writeUserData(
      // this line below might get the user ID im not entirely sure
      this.state.userId,
      this.state.userName,
      this.state.email,
      this.state.newestTweet
    );
    console.log(
      `this is a database Connection Check\nthe use ID is : ${this.state.userID} \n the user Email is: ${this.state.email}`
    );
    console.log("handle submit was clicked");
    console.log(`the tweet list is now: ${this.state.tweetList}`);
  };
  render() {
    return (
      <div id="tweetDisplayContainer">
        <div id="tweetInputSection">
          <form onSubmit={this.handleSubmit}>
            <label>
              Tweet:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
            </label>
            <input type="submit" Value="tweet"></input>
          </form>
        </div>
        <div id="tweetDisplay">
          <TweetMap
            tweets={this.state.tweetList.reverse()}
            username={this.state.email}
          />
        </div>
      </div>
    );
  }
}
