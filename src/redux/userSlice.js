import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {
      email: null,
      displayName: null,
      id: null,
    },
  },
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const {
  actions: { addUser },
} = userSlice;
export default userSlice.reducer;
