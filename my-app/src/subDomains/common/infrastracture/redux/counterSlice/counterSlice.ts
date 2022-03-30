import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { domainCounterModel, domainIncrementByAmount } from '../../../../counter/domain/entities/DomainCounterModel';

const initialState: domainCounterModel = { value: 0 };

//actions
// const incrementAction = (state:domainCounterModel) => domainIncrementByAmount(state, 1)
// const decrementAction = (state:domainCounterModel) => domainIncrementByAmount(state, -1)
// const incrementByAmountAction = (state:domainCounterModel, action: any) => domainIncrementByAmount(state, action.payload)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //handle-uje biznis state
  reducers: {
    increment: (state:domainCounterModel) => domainIncrementByAmount(state, 1),
    decrement: (state:domainCounterModel) => domainIncrementByAmount(state, -1),
    incrementByAmount: (state:domainCounterModel, action: PayloadAction<number>) => domainIncrementByAmount(state, action.payload)
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCounterValue = (state: RootState) : number => { 
  return state.counterState.value;
}

export const selectCounterStateCopy = (state: RootState) : domainCounterModel => { 
  const counter = { ...state.counterState }; //ovde je odgovornost da se kopira state
  return counter;
}

export const selectCounterState = (state: RootState) : domainCounterModel => { 
  return state.counterState;
}

export default counterSlice.reducer;
