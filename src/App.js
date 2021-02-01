
import axios from './axios';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fecthVids = async () =>{
      const result = await axios({
        method: "GET",
        url: "/v2/api/vid123/"
      });
      setVideos(result.data);
    }
    fecthVids();
  }, []);

  return (
    <div className="app">
      
      <div className="app__videos">
        {videos.map(({url, username, song, share, description, Likes, messages, _id}) => (
          <Video 
            key={_id}
            id={_id}
            url={url}
            channel={username}
            song={song}
            share={share}
            message={messages}
            likes={Likes}
            description={description}
          />
        ))}
        
      </div>
      
      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
