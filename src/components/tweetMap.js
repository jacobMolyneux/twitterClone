import "./styleSheets/tweetMap.css";
import heartImage from "./images/heart.png";
import retweetImage from "./images/retweet.png";
import commentImage from "./images/speech-bubble.png";
export default function TweetMap(props) {
  const username = props.username;
  const tweetsArray = props.tweets;
  const tweets = tweetsArray;
  const listItems = tweets.map((tweet, index) => (
    <li id="listedTweet">
      <div id="tweetHolder">
        <div id="userDiv">
          <div id="userIcon">{username.charAt(0).toUpperCase()}</div>
          <h2 id="userNameDisplay">{username}</h2>
        </div>
        <p id="tweetContent" key={index}>
          {tweet}
        </p>
        <div id="actionButtons">
          <div className="actionButton">
            <img className="actionImage" src={heartImage} />
          </div>
          <div className="actionButton">
            <img src={retweetImage} className="actionImage" />
          </div>
          <div className="actionButton">
            <img src={commentImage} className="actionImage" />
          </div>
        </div>
      </div>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
