import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/pages/api/axiosIntance"; // Make sure to import your axios instance

const initialState = {
  user: {},
  status: "idle",
  error: null,
};

// Async thunk action to perform login
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (payload) => {
    try {
      const response = await instance.post("user/login", payload);

      const userData = response.data;
      console.log("login: ", response);

      return userData;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
);
export const updateuserData = createAsyncThunk(
  "login/updateuserData",
  async (payload) => {
    try {
      const response = await instance.put(
        `user/update-onboarding-data/${payload.user}`,
        payload
      );
      console.log("update-onboarding-data: ", response);
      const userData = response.data;
      return userData;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default loginSlice.reducer;
