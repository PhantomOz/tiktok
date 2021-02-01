import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons'
import React, { useState } from 'react'
import './VideoSidebar.css';
function VideoSidebar() {
    const [like, setLike] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {like ? <Favorite fontSize="large"/> : <FavoriteBorder fontSize="large" onClick={()=> setLike(true)}/> }
                <p>1.4M</p>
            </div>
            <div className="videoSidebar__button">
                <Message fontSize="large"/>
                <p>14K</p>
            </div>
            <div className="videoSidebar__button">
                <Share fontSize="large"/>
                <p>2M</p>
            </div>
            
        </div>
    )
}

export default VideoSidebar
