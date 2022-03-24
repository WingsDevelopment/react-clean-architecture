import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../subDomains/common/infrastracture/redux/store/hooks';
import { complexUseCaseAsync, simpleIncrement } from '../../../../subDomains/common/infrastracture/redux/counterSlice/counterActions';

import styles from './Counter.module.css';
import { selectCounterUiState, selectCounterValue } from '../../../../subDomains/common/infrastracture/redux/counterSlice/counterSlice';

export function Counter() {
  const count = useAppSelector(selectCounterValue);
  const counterUIState = useAppSelector(selectCounterUiState);
  const dispatch = useAppDispatch();
  const [incrementAmount,] = useState(2);

  const incrementValue = Number(incrementAmount) || 0;

  const onComplexUseCaseAsync = async () => {
    await dispatch(complexUseCaseAsync(incrementValue))
  };

  const onSimpleIncrement = async () => {
    dispatch(simpleIncrement())
  };

  return (
    <div>
      <div className={styles.row}>
        <button
            className={styles.button}
            aria-label="CUCA"
            onClick={onComplexUseCaseAsync}
            disabled={counterUIState.isFatching}
          >
            cuca
        </button>
        
        <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={onSimpleIncrement}
            disabled={counterUIState.isFatching}
          >
            +
          </button>
      </div>
      <p>
        {counterUIState.isFatching ? 'Loading...' : 'Loaded'}
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
