import React from 'react';
import './Track.css';

/*const tracks = [
    {name: 'Winter',
    artist: 'Taylor',
    album: 'Red',
    id: '1'}, 
    {name: 'Summer',
    artist: 'Taylor',
    album: 'Red',
    id: '2'}
]
const Track = ({track, addTrack, isAdd, removeTrack}) => {

    const handleAddClick = () => {
        addTrack(track);
    }

    const handleRemoveClick = () => {
        removeTrack(track);
    }


    return (
        <>
            <h3>Title: {track.title}</h3>
            <p>Artist: {track.artist} | Album: {track.album}</p>
            {isAdd ? 
            <button onClick={handleRemoveClick}>Remove</button> :
            <button onClick={handleAddClick}>Add</button>
            }
        </>
    )
}





    const addTrack = () =>{
        props.onAdd(props.track);
    };

    const removeTrack = () =>{
        props.onRemove(props.track);
    };

    const addFunctionality = () =>{
        if(props.isRemovable){
            return(
                <button className="Track-action" onClick={removeTrack}>-</button>
            );
        };
        return(
            <button className="Track-action" onClick={addTrack}>+</button>
        );

    };

    return (
        <div className="Track">
            <div className="Track-information">
                <img className='Track-image' alt='The track cover' src={props.track.image}/>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {addFunctionality()}
        </div>
    );
};
*/
function Track(props) {}
export default Track;