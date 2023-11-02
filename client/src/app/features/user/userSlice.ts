import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../../types';

// Define the state type
interface UserState {
  user: null | User; // Assuming user is a string or null
}

// Define the initial state
const initialState: UserState = {
  user: null,
};

// Create a slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

// Export actions and reducer
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
