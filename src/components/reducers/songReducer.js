const initialState = {
  currentSong: null,
  likedSongs: JSON.parse(localStorage.getItem("likedSongs")) || {},
  searchResults: [],
  playlist: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    case "TOGGLE_LIKE_SONG":
      const song = action.payload;
      const updatedLikedSongs = {
        ...state.likedSongs,
        [song.id]: state.likedSongs[song.id] ? null : song,
      };
      localStorage.setItem("likedSongs", JSON.stringify(updatedLikedSongs));
      return {
        ...state,
        likedSongs: updatedLikedSongs,
      };
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
      };
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    default:
      return state;
  }
};

export default songReducer;
