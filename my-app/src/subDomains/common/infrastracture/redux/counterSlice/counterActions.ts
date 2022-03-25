import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store/store";
import { domainCounterModel } from "../../../../counter/domain/entities/DomainCounterModel";
import { selectCounterStateCopy, setCounterState } from "./counterSlice";
import { IDomainStateManagement } from "../../../../counter/domain/stateManagement/DomainStateManagementProvider";
import { applicationFetchAndIncrementByAmount } from "../../../../counter/application/ApplicationFetchAndIncrementByAmount";
import { applicationSimpleIncrement } from "../../../../counter/application/ApplicationSimpleIncrement";


export const getCustomStateManagmentCallbacks = (dispatch: any, getState: any) : IDomainStateManagement => {
  return {
      getStateCallback: () => selectCounterStateCopy(getState() as RootState),
      setStateCallback: (state: domainCounterModel) => dispatch(setCounterState(state))
  }
}

export const fetchAndIncrementByAmountThunk = createAsyncThunk( 'counter/applicationFetchAndIncrementByAmount', 
  async (amount: number, { dispatch, getState, rejectWithValue }) => {
      try {
        await applicationFetchAndIncrementByAmount(
          getCustomStateManagmentCallbacks(dispatch, getState),
          {amount: amount}
        );
      }
      catch (err) {
        return rejectWithValue("failed");
      }
    }
  );

export const simpleIncrementThunk = (): AppThunk => (
    dispatch,
    getState
  ) => {
    applicationSimpleIncrement(getCustomStateManagmentCallbacks(dispatch, getState));
};