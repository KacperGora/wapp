import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      uid: "",
      photoUrl: "",
      displayName: "",
    },
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
