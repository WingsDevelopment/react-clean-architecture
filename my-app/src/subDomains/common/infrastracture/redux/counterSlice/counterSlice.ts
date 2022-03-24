import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { xxxCounterModel } from '../../../../counter/domain/entities/CounterModel';
import { complexUseCaseAsync } from './counterActions';
import { CounterUIState, getUiStateOnFailed, getUiStateOnFetching, getUiStateOnSuccess } from '../../../../../userInterface/counter/counterUIState/CounterUIState';

interface CounterSliceState {
    counter: xxxCounterModel;
    uiState: CounterUIState;
}

const initialState: CounterSliceState = {
    counter: {
        value: 0,
    },
    uiState: {
        isLoading: false,
        errorFetchMessage: '',
        state : 'idle',
    }
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //handle-uje biznis state
  reducers: {
    //ovo nas interesuje
    setCounterState : (state, action) => {
      state.counter = action.payload;
    },
  },
  //handle-uje UI state
  extraReducers: (builder) => {
    builder
      .addCase(complexUseCaseAsync.pending, (state) => {
        state.uiState = getUiStateOnFetching();
      })
      .addCase(complexUseCaseAsync.fulfilled, (state) => {
        state.uiState = getUiStateOnSuccess();
      })
      .addCase(complexUseCaseAsync.rejected, (state, action) => {
        state.uiState = getUiStateOnFailed(action.payload as string);
      })
  },
});

export const { setCounterState } = counterSlice.actions;

export const selectCounterValue = (state: RootState) : number => { 
  return state.counterState.counter.value;
}

export const selectCounterUiState = (state: RootState) : CounterUIState => { 
  return state.counterState.uiState;
}

export const selectCounterStateCopy = (state: RootState) : xxxCounterModel => { 
  const counter = { ...state.counterState.counter }; //ovde je odgovornost da se kopira state
  return counter;
}

export default counterSlice.reducer;
