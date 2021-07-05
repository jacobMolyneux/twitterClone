import "./styleSheets/tweetMap.css";
export default function TweetMap(props) {
  const tweetsArray = props.tweets;
  const tweets = tweetsArray.reverse();
  const listItems = tweets.map((tweet, index) => (
    <li id="listedTweet">
      <div id="tweetHolder">
        <h2 id="userNameDisplay">Username</h2>
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
