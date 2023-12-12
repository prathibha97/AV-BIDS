import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepsState {
  currentStep: number;
}

const initialState: StepsState = {
  currentStep: 1,
};

const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    incrementStep(state) {
      state.currentStep += 1;
    },
    decrementStep(state) {
      state.currentStep -= 1;
    },
  },
});

export const { setStep, incrementStep, decrementStep } = stepsSlice.actions;
export default stepsSlice.reducer;
