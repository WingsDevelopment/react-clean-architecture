import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { domainCounterModel } from '../../../../counter/domain/entities/DomainCounterModel';
import { fetchAndIncrementByAmountThunk } from './counterActions';
import { CounterUIState, getUiStateOnFailed, getUiStateOnFetching, getUiStateOnSuccess } from '../../../../../userInterface/counter/counterUIState/CounterUIState';

interface CounterSliceState {
    counter: domainCounterModel;
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
      //domain function
    },
  },
  //handle-uje UI state
  extraReducers: (builder) => {
    builder
      .addCase(fetchAndIncrementByAmountThunk.pending, (state) => {
        state.uiState = getUiStateOnFetching();
      })
      .addCase(fetchAndIncrementByAmountThunk.fulfilled, (state) => {
        state.uiState = getUiStateOnSuccess();
      })
      .addCase(fetchAndIncrementByAmountThunk.rejected, (state, action) => {
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

export const selectCounterStateCopy = (state: RootState) : domainCounterModel => { 
  const counter = { ...state.counterState.counter }; //ovde je odgovornost da se kopira state
  return counter;
}

export const selectCounterState = (state: RootState) : domainCounterModel => { 
  return state.counterState.counter;
}

export default counterSlice.reducer;
