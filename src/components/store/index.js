import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../reducers/songReducer";

const store = configureStore({
  reducer: {
    song: songReducer,
  },
});

export default store;
