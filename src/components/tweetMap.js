import "./styleSheets/tweetMap.css";
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
          <div className="actionButton">Like</div>
          <div className="actionButton">Retweet</div>
          <div className="actionButton">Comment</div>
        </div>
      </div>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
