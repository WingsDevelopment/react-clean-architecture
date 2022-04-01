import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '../store/store';
import { domainCounterModel, domainDecrement, domainIncrement, domainIncrementByAmount } from '../../../../counter/domain/entities/DomainCounterModel';
import { ICounterStorage } from '../../../../counter/domain/stateManagement/CounterStorage';

const initialState: domainCounterModel = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //handle-uje biznis state
  reducers: {
    increment: (state:domainCounterModel) => domainIncrement(state),
    decrement: (state:domainCounterModel) => domainDecrement(state),
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

export class CounterStorage implements ICounterStorage {
    getValue = () => store.getState().counterState;
    increment = () => store.dispatch(increment());
    decrement = () => store.dispatch(decrement());
    incrementByAmount = (amount: number) => store.dispatch(incrementByAmount(amount));
}

export default counterSlice.reducer;