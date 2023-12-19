import React from 'react';
import './Track.css';

function Track(props) {
    const addTrack = () => {
        props.onAdd(props.track);
    }
    const removeTrack = () => {
        props.onRemove(props.track);
    }
    const chooseButton = () => {
        if(props.isRemovable) {
            return (
                <button className="Track-action" onClick={removeTrack}>-</button>
            )
        }
        return (
            <button className="Track-action" onClick={addTrack}>+</button>
        )
    }
    return (
        <>
        <div className="Track">
            <div className="Track-information">
            <img className='Track-image' alt='The track cover' src={props.track.image}/>
                <h3>Title: {props.track.name}</h3>
                <p>Artist: {props.track.artist} | Album: {props.track.album}</p>
            </div>
        {chooseButton()}
        </div>
        </>
    )
}

export default Track;