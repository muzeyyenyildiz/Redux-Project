import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./note/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});
