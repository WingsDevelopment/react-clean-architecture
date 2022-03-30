import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store/store";
import { selectCounterStateCopy } from "./counterSlice";
import { IDomainStateManagement } from "../../../../counter/domain/stateManagement/DomainStateManagement";
import { useApplicationFetchAndIncrementByAmount } from "../../../../counter/application/ApplicationFetchAndIncrementByAmount";
import { applicationSimpleIncrement } from "../../../../counter/application/ApplicationSimpleIncrement";
import { useCallback } from "react";
import { useAppDispatch } from "../store/hooks";

export const useFetchAndIncrementByAmountThunk = () => {
  const dispatch = useAppDispatch();

  const fetchAndIncrementByAmountThunkCB = useCallback( async (amount:number) => {
    await dispatch(fetchAndIncrementByAmountThunk(amount));
  }, [dispatch]);

  return {fetchAndIncrementByAmountThunkCB};
}

export const fetchAndIncrementByAmountThunk = createAsyncThunk( 'counter/applicationFetchAndIncrementByAmount', 
  async (amount: number, { rejectWithValue }) => {
      const {applicationFetchAndIncrementByAmount} = useApplicationFetchAndIncrementByAmount();
      try {
        await applicationFetchAndIncrementByAmount(amount);
      }
      catch (err) {
        return rejectWithValue("failed");
      }
    }
  );

export const simpleIncrementThunk = (): AppThunk => () => {
    applicationSimpleIncrement();
};