const clientID = 'a927442c905f4b71a1a963774272a7e7';
const redirectURI = 'http://localhost:3000/';
let accessToken;

function Spotify() {
    const getAccessToken = () => {
        if (accessToken){
            return accessToken;
        }

        const findURLaccessToken = window.location.href.match(/access_token=([^&]*)/);
        const findExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (findURLaccessToken && findExpiresIn){
            accessToken = findURLaccessToken[1];
            const expiresIn = Number(findExpiresIn[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessURL = 'https://accounts.spotify.com/authorize?response_type=token&client_id=a927442c905f4b71a1a963774272a7e7&scope=playlist-modify-public&redirect_uri=http:/localhost:3000/'
            window.location = accessURL;        
        }
    }

    const search = (term) => {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term.replace(' ', '%20')}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => response.json()).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => {
                return {
                    id: track.id, 
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }
            })
        })
    }

}

export default Spotify;