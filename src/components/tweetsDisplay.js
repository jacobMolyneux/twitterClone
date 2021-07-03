import React from "react";
import TweetCard from "./tweetCard.js";
import TweetMap from "./tweetMap.js";
import "./styleSheets/tweetDisplay.css";

export default class TweetDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      newestTweet: "",
      tweetList: ["tweet1", "tweet2", "tweet3", "tweet4"],
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
    console.log("handle submit was clicked");
    console.log(`the tweet list is now: ${this.state.tweetList}`);
  };
  render() {
    return (
      <div id="tweetDisplayContainer">
        <div id="tweetInputSection">
          <form>
            <input
              type="text"
              id="tweetInput"
              onChange={this.handleChange}
            ></input>
            <button id="submitButton" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div id="tweetDisplay">
          <TweetMap tweets={this.state.tweetList} />
        </div>
      </div>
    );
  }
}
