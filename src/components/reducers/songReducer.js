const initialState = {
  currentSong: null,
  likedSongs: {},
  playlist: [],
  previewUrl: "",
  searchResults: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SONG":
      return { ...state, currentSong: action.payload };
    case "TOGGLE_LIKE_SONG":
      const likedSongs = { ...state.likedSongs };
      if (likedSongs[action.payload.id]) {
        delete likedSongs[action.payload.id];
      } else {
        likedSongs[action.payload.id] = action.payload;
      }
      return { ...state, likedSongs };
    case "ADD_TO_PLAYLIST":
      return { ...state, playlist: [...state.playlist, action.payload] };
    case "SET_PREVIEW_URL":
      return { ...state, previewUrl: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default songReducer;
