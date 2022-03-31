import { useDispatch, useSelector } from "react-redux";
import { domainCounterModel } from "../../../../counter/domain/entities/DomainCounterModel";
import { ICounterStorage } from "../../../../counter/domain/stateManagement/CounterStorage";
import { decrement, increment, incrementByAmount } from "../counterSlice/counterSlice";

const selectCounter = (state: domainCounterModel) => state;

export function useCounterStorage(): ICounterStorage {
  const dispatch = useDispatch();
  const value = useSelector(selectCounter);

  return {
    getValue: () => value,

    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement),
    incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
  }
}