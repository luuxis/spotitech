
const API_URL = `http://localhost:${process.env.REACT_APP_API_PORT}`;

const API_ARTISTS = `${API_URL}/artists`;
const API_ALBUMS = `${API_URL}/albums`;
const API_GENRES = `${API_URL}/genres`;
const API_TRACKS = `${API_URL}/tracks`;



export {
    API_ARTISTS,
    API_ALBUMS,
    API_GENRES,
    API_TRACKS
};