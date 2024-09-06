const initialState = {
  currentSong: null,
  likedSongs: {},
  searchResults: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    case "TOGGLE_LIKE_SONG":
      return {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          [action.payload]: !state.likedSongs[action.payload],
        },
      };
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
