import React, { useState } from 'react';
import Track from '../Track/Track';

import './Tracklist.css';

function Tracklist(props) {
    return (
    <div>
        {props.track.map((track) => {
            return(
                <Track 
                    track={track}
                    key={track.id}
                    addTrack={props.addTrack}
                    isRemovable={props.isRemovable}
                    removeTrack={props.removeTrack}
                />
            );
        })}
    </div>
    )
}

export default Tracklist;