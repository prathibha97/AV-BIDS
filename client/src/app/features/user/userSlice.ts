import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../../types';

// Define the state type
interface UserState {
  user: null | User; 
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
    updateUser(state, action: PayloadAction<Partial<User>>) {
      if( state.user){
        state.user = {
          ...state.user,
          ...action.payload,
        };
      }
    },
  },
});

// Export actions and reducer
export const { setUser, clearUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
