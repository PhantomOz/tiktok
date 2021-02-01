import React, { useRef, useState } from 'react'
import vid from './videos/6919263540142542085.mp4';
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
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
                src={vid}
            >
            </video>
            <VideoFooter />
            <VideoSidebar />
           

        </div>
    )
}

export default Video
