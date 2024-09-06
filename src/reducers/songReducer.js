const initialState = {
  currentSong: null,
  likedSongs: {},
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    case "TOGGLE_LIKE_SONG":
      const songId = action.payload;
      return {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          [songId]: !state.likedSongs[songId],
        },
      };
    default:
      return state;
  }
};

export default songReducer;
