import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store/store";
import { CounterService } from "../../../../counter/applicationServices/CounterService";
import { xxxCounterModel } from "../../../../counter/domain/entities/CounterModel";
import { selectCounterStateCopy, setCounterState } from "./counterSlice";
import { IStateManagement } from "../../../../counter/domain/stateManagement/StateManagementProvider";


export const getCustomStateManagmentCallbacks = (dispatch: any, getState: any) : IStateManagement => {
  return {
      getStateCallback: () => selectCounterStateCopy(getState() as RootState),
      setStateCallback: (state: xxxCounterModel) => dispatch(setCounterState(state))
  }
}

export const complexUseCaseAsync = createAsyncThunk( 'counter/complexUseCaseAsync', 
  async (amount: number, { dispatch, getState, rejectWithValue }) => {
      try {
        await CounterService.xxxComplexUseCaseAsync(
          getCustomStateManagmentCallbacks(dispatch, getState),
          {amountParams: amount});
      }
      catch (err) {
        return rejectWithValue("failed");
      }
    }
  );

export const simpleIncrement = (): AppThunk => (
    dispatch,
    getState
  ) => {
    CounterService.xxxSimpleIncrement(getCustomStateManagmentCallbacks(dispatch, getState));
};