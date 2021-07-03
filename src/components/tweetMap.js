import "./styleSheets/tweetMap.css";
export default function TweetMap(props) {
  const tweets = props.tweets;
  const listItems = tweets.map((tweet) => (
    <li id="listedTweet">
      <div id="tweetHolder">
        <h2>Username</h2>
        <p>{tweet}</p>
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
