import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons'
import React, { useState } from 'react'
import './VideoSidebar.css';
function VideoSidebar({ likes, message, share}) {
    const [like, setLike] = useState(false);
    const [lik , setLik] = useState(likes);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {like ? <Favorite fontSize="large" onClick={() => {setLike(false); setLik(lik - 1)}}/> : <FavoriteBorder fontSize="large" onClick={()=> {setLike(true);  setLik(lik + 1)}}/> }
                <p>{lik}</p>
            </div>
            <div className="videoSidebar__button">
                <Message fontSize="large"/>
                <p>{message}</p>
            </div>
            <div className="videoSidebar__button">
                <Share fontSize="large"/>
                <p>{share}</p>
            </div>
            
        </div>
    )
}

export default VideoSidebar
