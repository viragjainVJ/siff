import React from 'react';
import YoutubePlayer from './YoutubePlayer';
import youtubeLinks from '../../data/youtubelinks.json';
import YouTubeLogo from '../../images/youtube_logo.png'

const YoutubeView = () => {
    return(
        <div className='youtube_view'>
            <div className='youtube_heading'><img src={YouTubeLogo}></img></div>
            <div className='youtube_player'>
                {youtubeLinks.map((data) => {
                    return <div className='youtube_column' key={data.id}><YoutubePlayer url={data.url}/></div>
                })}
            </div>
        </div>
    )
}

export default YoutubeView;