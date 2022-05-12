import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
type User = {
  name: string;
};
interface UserState {
  user: User | null;
  loading: boolean;
  error: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
