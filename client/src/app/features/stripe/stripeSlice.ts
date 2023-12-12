import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StripePrice, StripeSubscription } from '../../../types';

interface StripeState {
  prices: StripePrice | [];
  subscription: {
    subscriptionId: string;
    clientSecret: string | undefined;
  };
  plan: StripePrice | null;
}

const initialState: StripeState = {
  prices: [],
  subscription: {
    subscriptionId: '',
    clientSecret: undefined,
  },
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
      state.subscription.clientSecret = action.payload.clientSecret;
      state.subscription.subscriptionId = action.payload.subscriptionId;
    },
    clearSubscription(state) {
      state.subscription.clientSecret = '';
      state.subscription.subscriptionId = '';
    },
    setPlan(state, action: PayloadAction<StripePrice>) {
      state.plan = action.payload;
    },
    clearPlan(state) {
      state.plan = null;
    },
    clearAll(state) {
      state.prices = [];
      state.subscription.subscriptionId = '';
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
  clearAll,
} = stripeSlice.actions;
export default stripeSlice.reducer;
