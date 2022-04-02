import React from 'react';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const TwitterCard = () => {
    return(
        <div className="centerContent">
            <div className="selfCenter spaceBetween">
                <TwitterTimelineEmbed
                onLoad={function noRefCheck(){}}
                options={{
                    height: 500
                }}
                screenName="realsiff"
                />
            </div>
        </div>
    )
}

export default TwitterCard;