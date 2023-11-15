import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../../../types';

// Define the state type
interface EventState {
  event: null | Event;
}

// Define the initial state
const initialState: EventState = {
  event: null,
};

// Create a slice
const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent(state, action: PayloadAction<Event>) {
      state.event = action.payload;
    },
    clearEvent(state) {
      state.event = null;
    },
    updateEvent(state, action: PayloadAction<Partial<Event>>) {
      if (state.event) {
        state.event = {
          ...state.event,
          ...action.payload,
        };
      }
    },
  },
});

// Export actions and reducer
export const { setEvent, clearEvent, updateEvent } = eventSlice.actions;
export default eventSlice.reducer;
