import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../counterSlice/counterSlice';
import uiApplicationReducer from '../uiSlice/uiApplicationSlice';

export const store = configureStore({
  reducer: {
    counterState: counterReducer,
    uiApplicationSlice: uiApplicationReducer,
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
