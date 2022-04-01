import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../store/store";
import { CounterService } from "../../../../counter/application/CounterService";
import { container } from "../../../../..";


export const fetchAndIncrementByAmountThunk = createAsyncThunk( 'counter/applicationFetchAndIncrementByAmount', 
  async (amount: number, { rejectWithValue }) => {
      try {
        const service = container.get<CounterService>('CounterService');
        await service.applicationFetchAndIncrementByAmount(amount);
      }
      catch (err) {
        console.log(err);
        return rejectWithValue("failed");
      }
    }
  );

export const simpleIncrementThunk = (): AppThunk => () => {
  const service = container.get<CounterService>('CounterService');
  service.applicationSimpleIncrement();
};