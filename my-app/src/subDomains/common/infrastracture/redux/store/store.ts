import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../counterSlice/counterSlice';

export const store = configureStore({
  reducer: {
    counterState: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;