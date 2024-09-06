export const setCurrentSong = (song) => ({
  type: "SET_CURRENT_SONG",
  payload: song,
});

export const toggleLikeSong = (song) => ({
  type: "TOGGLE_LIKE_SONG",
  payload: song,
});

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const addToPlaylist = (song) => ({
  type: "ADD_TO_PLAYLIST",
  payload: song,
});
