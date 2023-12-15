import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    return (
        <Tracklist
        track={props.searchResults}
        addTrack={props.addTrack}
        isRemovable={false}
        />
    );
}

export default SearchResults;