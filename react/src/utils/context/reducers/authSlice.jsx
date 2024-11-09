import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  user: null,
  token: null,
  profile: "business",
};

const authSlice = createSlice({
  name: "auth",
  initialState: userInitialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    // loginSuccess: (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    // },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.post = [];
    },
    userProfile: (state, action) => {
      state.profile = action.payload.profile;
    },
  },
});

export const { setToken, setUserData, logout, userProfile } = authSlice.actions;
export default authSlice.reducer;
