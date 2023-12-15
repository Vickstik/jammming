import React from 'react';
import './Track.css';

function Track(props) {
    const handleAddClick = () => {
        props.addTrack(props.track);
    }
    const handleRemoveClick = () => {
        props.removeTrack(props.track);
    }
    const chooseButton = () => {
        if(props.isRemovable) {
            return (
                <button onClick={handleRemoveClick}>-</button>
            )
        }
        return (
            <button onClick={handleAddClick}>+</button>
        )
    }
    return (
        <>
        <div>
            <div>
                <h3>Title: {props.track.name}</h3>
                <p>Artist: {props.track.artist} | Album: {props.track.album}</p>
            </div>
        {chooseButton}
        </div>
        </>
    )
}

export default Track;