import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './features/user/userSlice';
import EventReducer from './features/events/eventSlice';
import memberReducer from './features/members/memberSlice';
import alertReducer from './features/alerts/alertSlice';



const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    event: EventReducer,
    member: memberReducer,
    alert: alertReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Define AppThunk type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;