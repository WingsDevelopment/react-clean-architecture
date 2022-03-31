import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../store/store";
import { container, MYTYPES } from "../../../../..";
import { CounterService } from "../../../../counter/application/CounterService";


export const fetchAndIncrementByAmountThunk = createAsyncThunk( 'counter/applicationFetchAndIncrementByAmount', 
  async (amount: number, { rejectWithValue }) => {
      try {
        const counterService = container.get<CounterService>(MYTYPES.CounterService);
        await counterService.applicationFetchAndIncrementByAmount(amount);
      }
      catch (err) {
        return rejectWithValue("failed");
      }
    }
  );

export const simpleIncrementThunk = (): AppThunk => () => {
  const counterService = container.resolve(CounterService);
  counterService.applicationSimpleIncrement();
};