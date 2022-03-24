
// We can also write thunks by hand, which may contain both sync and async logic.

import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store/store";
import { CounterService } from "../../../../counter/applicationServices/CounterService";
import { CounterState } from "../../../../counter/domain/entities/CounterState";
import { decrement, incrementByAmount, selectCount, selectCounterStateCopy, setCounterState } from "./counterSlice";

// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount: number): AppThunk => (
    dispatch,
    getState
  ) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      debugger;
      dispatch(incrementByAmount(amount));
      debugger;
      dispatch(decrement());
    }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.













export const complexUseCaseAsync = createAsyncThunk( 'counter/complexUseCaseAsync', 
  async (amount: number, { dispatch, getState, rejectWithValue }) => {
      try {
        // ruznjikavo.. :(
        await CounterService.xxxComplexUseCase(
          // get state
          () : CounterState => selectCounterStateCopy(getState() as RootState), 
          // callback za dispatchovanje akcije -> setCounterState
          (state: CounterState) => dispatch(setCounterState(state)), 
          //params
          {amountParams: amount});
      }
      catch (err) {
        return rejectWithValue("failed");
      }
    }
  );