import { useState } from 'react';

import { selectCounterUiState, selectCounterValue } from '../../../../subDomains/common/infrastracture/redux/counterSlice/counterSlice';
import { fetchAndIncrementByAmountThunk, simpleIncrementThunk } from '../../../../subDomains/common/infrastracture/redux/counterSlice/counterActions';
import { useAppSelector, useAppDispatch } from '../../../../subDomains/common/infrastracture/redux/store/hooks';

import styles from './ReduxCounter.module.css';

//USES CUSTOM REDUX TOOLKIT STORE
export function Counter() {
  const count = useAppSelector(selectCounterValue);
  const counterUIState = useAppSelector(selectCounterUiState);
  const dispatch = useAppDispatch();
  const paramAmount = 4;

  const fetchAndIncrementByAmount = async () => {
    await dispatch(fetchAndIncrementByAmountThunk(paramAmount));
  };

  const onSimpleIncrement = () => {
    dispatch(simpleIncrementThunk());
  };

  return (
    <div>
      <div className={styles.row}>
        <button
            className={styles.button}
            aria-label="CUCA"
            onClick={fetchAndIncrementByAmount}
            disabled={counterUIState.isLoading}
          >
            cuca
        </button>
        
        <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={onSimpleIncrement}
            disabled={counterUIState.isLoading}
          >
            +
          </button>
      </div>
      <p>
        {counterUIState.isLoading ? 'Loading...' : 'Loaded'}
      </p>
      <p>
        State: {counterUIState.state}
      </p>
      <p>
        {counterUIState.errorFetchMessage && counterUIState.errorFetchMessage}
      </p>
    </div>
  );
}
