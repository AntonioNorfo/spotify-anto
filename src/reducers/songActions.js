export const setCurrentSong = (song) => ({
  type: "SET_CURRENT_SONG",
  payload: song,
});

export const toggleLikeSong = (songId) => ({
  type: "TOGGLE_LIKE_SONG",
  payload: songId,
});
