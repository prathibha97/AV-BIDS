import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Member } from '../../../types';

// Define the state type
interface MemberState {
  member: null | Member;
}

// Define the initial state
const initialState: MemberState = {
  member: null,
};

// Create a slice
const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMember(state, action: PayloadAction<Member>) {
      state.member = action.payload;
    },
    clearMember(state) {
      state.member = null;
    },
    updateMember(state, action: PayloadAction<Partial<Member>>) {
      if (state.member) {
        state.member = {
          ...state.member,
          ...action.payload,
        };
      }
    },
  },
});

// Export actions and reducer
export const { setMember, clearMember, updateMember } = memberSlice.actions;
export default memberSlice.reducer;
