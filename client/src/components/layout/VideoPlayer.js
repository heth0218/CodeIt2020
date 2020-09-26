import React, { useState } from 'react'
import { Player } from 'video-react';

const VideoPlayer = ({ video }) => {

    const { Title, Vurl } = video

    const [clicked, setClicked] = useState(false);

    const onVideoClick = () => {
        setClicked(!clicked);
    }

    return (
        <div>
            <h4>
                <a href="#!" class="collection-item" onClick={onVideoClick}><span class="badge"></span>{Title}</a>
                <div style={{ "height": "auto", "width": "300px", "marginLeft": "500px", "margin": "50px " }}>
                    {clicked && <Player>
                        <source src={Vurl} />
                    </Player>}
                </div>
            </h4>
        </div>
    )
}

export default VideoPlayer
