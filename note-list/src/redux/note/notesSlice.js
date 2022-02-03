import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      { id: nanoid(), text: "Note 1", color: "mavi" },
      { id: nanoid(), text: "Note 2", color: "yesil" },
      { id: nanoid(), text: "Note 3", color: "sari" },
      { id: nanoid(), text: "Note 4", color: "mor" },
      { id: nanoid(), text: "Note 5", color: "pembe" },
      { id: nanoid(), text: "Note 6", color: "yesil" },
    ],
    activeColor: "sari",
    filteredNotes: [],
  },
  reducers: {
    setActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },
    addNotesList: (state, action) => {
      state.items.push(action.payload);
    },
    setFilteredNotes: (state, action) => {
      debugger;
      const filteredNote = state.items.filter((item) =>
        item.text.toLowerCase().includes(action.payload)
      );
      if (filteredNote) {
        state.filteredNotes = filteredNote;
      }
    },
  },
});


export const { setActiveColor, setInputValue, addNotesList, setFilteredNotes } =
  notesSlice.actions;

export default notesSlice.reducer;
