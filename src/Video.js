import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, song, description, likes, message, share}) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);


    const handlePlay = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
                className="video__player"
                ref={videoRef}
                onClick={handlePlay}
                loop
                src={`https://tiktokclome.herokuapp.com${url}`}
            >
            </video>
            <VideoFooter
                song={song}
                channel={channel}
                description={description} 
            />
            <VideoSidebar
                likes={likes}
                share={share}
                message={message}
            />
           

        </div>
    )
}

export default Video
