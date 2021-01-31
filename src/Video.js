import React from 'react'

function Video() {
    return (
        <div className="video">
            <video
                className="video__player"
                controls
                autoPlay
                loop
                src="https://www.youtube.com/714121fd-2ab7-4789-97d5-165b7b0d285e"
            >
                
            </video>
            
            <h3>My video</h3>
           

        </div>
    )
}

export default Video
