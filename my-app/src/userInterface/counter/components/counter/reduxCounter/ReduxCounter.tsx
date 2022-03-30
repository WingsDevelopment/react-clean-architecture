import { selectCounterState } from '../../../../../subDomains/common/infrastracture/redux/counterSlice/counterSlice';
import { fetchAndIncrementByAmountThunk, simpleIncrementThunk, useFetchAndIncrementByAmountThunk } from '../../../../../subDomains/common/infrastracture/redux/counterSlice/counterActions';
import { useAppSelector, useAppDispatch } from '../../../../../subDomains/common/infrastracture/redux/store/hooks';

import { SimpleCustomStoreCounter } from '../SimpleCustomStoreCounter';
import { selectUiApplicationState } from '../../../../../subDomains/common/infrastracture/redux/uiSlice/uiApplicationSlice';

//USES CUSTOM REDUX TOOLKIT STORE
export function Counter() {
  const counter = useAppSelector(selectCounterState);
  const counterUIState = useAppSelector(selectUiApplicationState);
  const dispatch = useAppDispatch();
  const paramAmount = 4;
  const { fetchAndIncrementByAmountThunkCB } = useFetchAndIncrementByAmountThunk();

  const onFetchAndIncrementByAmount = async () => {
    fetchAndIncrementByAmountThunkCB(paramAmount);
  };

  const onSimpleIncrement = () => {
    dispatch(simpleIncrementThunk());
  };

  return (
    <>
      <SimpleCustomStoreCounter
        counter={counter}
        uiState={counterUIState}
        onFetchAndIncrementByAmountAsync={onFetchAndIncrementByAmount}
        onSimpleIncrement={onSimpleIncrement} />
    </>
  );
}
