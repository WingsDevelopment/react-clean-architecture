import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { domainCounterModel, domainIncrementByAmount } from '../../../../counter/domain/entities/DomainCounterModel';
import { CounterUIState, getUiStateOnFailed, getUiStateOnFetching, getUiStateOnSuccess } from '../../../../../userInterface/counter/counterUIState/CounterUIState';
import { fetchAndIncrementByAmountThunk } from '../counterSlice/counterActions';

const initialState: CounterUIState = { 
    isLoading: false,
    state: 'idle',
    errorFetchMessage: ""
 };

export const uiApplicationSlice = createSlice({
  name: 'uiApplication',
  initialState,
  //handle-uje biznis state
  reducers: {
  },
    //handle-uje UI state
  extraReducers: (builder) => {
    builder
      .addCase(fetchAndIncrementByAmountThunk.pending, (state) => {
        state = getUiStateOnFetching();
      })
      .addCase(fetchAndIncrementByAmountThunk.fulfilled, (state) => {
        state = getUiStateOnSuccess();
      })
      .addCase(fetchAndIncrementByAmountThunk.rejected, (state, action) => {
        state = getUiStateOnFailed(action.payload as string);
      })
  },
});


export const selectUiApplicationState = (state: RootState) : CounterUIState => { 
  return state.uiApplicationSlice;
}

export default uiApplicationSlice.reducer;
