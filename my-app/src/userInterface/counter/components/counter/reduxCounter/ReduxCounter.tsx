import { selectCounterState, selectCounterUiState } from '../../../../../subDomains/common/infrastracture/redux/counterSlice/counterSlice';
import { fetchAndIncrementByAmountThunk, simpleIncrementThunk } from '../../../../../subDomains/common/infrastracture/redux/counterSlice/counterActions';
import { useAppSelector, useAppDispatch } from '../../../../../subDomains/common/infrastracture/redux/store/hooks';

import { SimpleCustomStoreCounter } from '../SimpleCustomStoreCounter';

//USES CUSTOM REDUX TOOLKIT STORE
export function Counter() {
  const counter = useAppSelector(selectCounterState);
  const counterUIState = useAppSelector(selectCounterUiState);
  const dispatch = useAppDispatch();
  const paramAmount = 4;

  const onFetchAndIncrementByAmount = async () => {
    await dispatch(fetchAndIncrementByAmountThunk(paramAmount));
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
