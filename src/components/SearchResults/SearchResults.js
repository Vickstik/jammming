import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    return (
        <Tracklist
        tracks={props.searchResults}
        onAdd={props.onAdd}
        />
    );
}

export default SearchResults;