import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});
