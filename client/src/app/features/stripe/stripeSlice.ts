import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StripePrice, StripeSubscription } from '../../../types';

interface StripeState {
  prices: StripePrice | [];
  subscription: Record<string, any> | null;
  plan: StripePrice | null;
}

const initialState: StripeState = {
  prices: [],
  subscription: null,
  plan: null,
};

const stripeSlice = createSlice({
  name: 'stripe',
  initialState,
  reducers: {
    setPrice(state, action: PayloadAction<StripePrice>) {
      state.prices = action.payload;
    },
    clearPrice(state) {
      state.prices = [];
    },
    setSubscription(state, action: PayloadAction<StripeSubscription>) {
      state.subscription = action.payload;
    },
    clearSubscription(state) {
      state.subscription = null;
    },
    setPlan(state, action: PayloadAction<StripePrice>) {
      state.plan = action.payload;
    },
    clearPlan(state) {
      state.plan = null;
    },
  },
});

export const {
  setPrice,
  clearPrice,
  setSubscription,
  clearSubscription,
  setPlan,
  clearPlan,
} = stripeSlice.actions;
export default stripeSlice.reducer;
