import { useState } from "react";
import { Tweet } from "./components/Tweet";
import { AppRoutes } from "./Routes";

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet um',
    'Tweet dois',
    'Tweet tres',
    'Tweet quatro',
    'Tweet cinco'
  ]);


  function createTweet() {
    setTweets([...tweets, 'Tweet seis']);
  }

  return (
    <AppRoutes>
      {
        tweets.map((tweet, index) => {
          return <Tweet text={tweet} key={index} />
        })
      }
      <button
        style={{
          background: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: 'white'
        }}
        onClick={createTweet}
      >
        Add tweet
      </button>
    </AppRoutes>
  )
}

export default App
