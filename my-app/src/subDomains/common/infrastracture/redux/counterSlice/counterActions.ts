import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store/store";
import { CounterService } from "../../../../counter/applicationServices/CounterService";
import { xxxCounterModel } from "../../../../counter/domain/entities/CounterModel";
import { selectCounterStateCopy, setCounterState } from "./counterSlice";

export const complexUseCaseAsync = createAsyncThunk( 'counter/complexUseCaseAsync', 
  async (amount: number, { dispatch, getState, rejectWithValue }) => {
      try {
        // ruznjikavo?.. :(
        await CounterService.xxxComplexUseCaseAsync(
          // get state callback
          () : xxxCounterModel => selectCounterStateCopy(getState() as RootState), 
          // callback za dispatchovanje akcije -> setCounterState
          (state: xxxCounterModel) => dispatch(setCounterState(state)), 
          //params
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
    CounterService.xxxSimpleIncrement(
      // get state callback
      () : xxxCounterModel => selectCounterStateCopy(getState() as RootState), 
      // callback za dispatchovanje akcije -> setCounterState
      (state: xxxCounterModel) => dispatch(setCounterState(state)));
};