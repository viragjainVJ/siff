import React from 'react';
import ReactPlayer from "react-player";

const YoutubePlayer = ({url}) => {
    return(
        <ReactPlayer
            url={url}
            height= "100%"
            width= "100%"
            controls
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
        />
    )
}

export default YoutubePlayer;