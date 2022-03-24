import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../subDomains/common/infrastracture/redux/store/hooks';
import { CounterService } from '../../../../subDomains/counter/applicationServices/CounterService';
import { complexUseCaseAsync, incrementIfOdd } from '../../../../subDomains/common/infrastracture/redux/counterSlice/counterActions';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../../../../subDomains/common/infrastracture/redux/counterSlice/counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const onClick = async () => {
    try {
      const originalPromiseResult = await dispatch(complexUseCaseAsync(incrementValue)).unwrap()
      // handle result here
    } catch (rejectedValueOrSerializedError) {
      // handle error here
      window.alert('alo');
    }
  }

  const onComplexUseCaseAsync = async () => {
    await dispatch(complexUseCaseAsync(incrementValue))
  };

  return (
    <div>
      <div className={styles.row}>
        <button
            className={styles.button}
            aria-label="CUCA"
            onClick={onComplexUseCaseAsync}
          >
            cuca
        </button>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => onClick()}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
