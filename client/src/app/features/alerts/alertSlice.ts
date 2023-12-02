// alertSlice.ts
import { AlertProps } from '@material-tailwind/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store'; 

export interface AlertState {
  message: string | null;
  color: AlertProps['color'];
  open: boolean;
}

const initialState: AlertState = {
  message: null,
  color: 'green',
  open: false,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      return { ...state, ...action.payload };
    },
    resetAlert: (state) => {
      return { ...state, message: null, color: 'green', open: false };
    },
  },
});

export const { setAlert, resetAlert } = alertSlice.actions;

// Thunk to reset alert after 5 seconds
export const setAlertWithTimeout = (payload: AlertState): AppThunk => (dispatch) => {
  dispatch(setAlert(payload));

  // Set a timer to reset the alert after 5 seconds
  setTimeout(() => {
    dispatch(resetAlert());
  }, 5000);
};


export default alertSlice.reducer;
