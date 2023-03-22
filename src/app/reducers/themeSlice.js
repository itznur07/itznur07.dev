import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: { text: "#ffffff", optionalColor: "#94A3B8", bg: "#1E293B" },
  },
  reducers: {
    changeTheme: (state, action) => {
      if (action.payload === true) {
        state.mode.text = "#000000";
        state.mode.bg = "#ffffff";
      } else {
        state.mode.text = "#ffffff";
        state.mode.bg = "#1E293B";
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
