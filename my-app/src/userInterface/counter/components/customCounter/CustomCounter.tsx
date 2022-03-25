import { useState } from 'react';

import { getCustomStateManagmentCallbacks } from '../../../../subDomains/common/infrastracture/custom-store/counterCustomStore';
import { CounterService } from '../../../../subDomains/counter/applicationServices/CounterService';
import { useCustomStore } from '../../../../subDomains/common/infrastracture/custom-store/store';

import styles from './CustomCounter.module.css';

//USES CUSTOM STORE
export function CustomCounter() {
  const {customGlobalState, customDispatch} = useCustomStore(); 
  const [incrementAmount,] = useState(2);
  const incrementValue = Number(incrementAmount) || 0;

  const onComplexUseCaseAsync = async () => {
    await CounterService.xxxComplexUseCaseAsync(
        getCustomStateManagmentCallbacks(customGlobalState, customDispatch),
        //params
        {amountParams: incrementValue});
  };

  const onSimpleIncrement = () => {
    CounterService.xxxSimpleIncrement(
      getCustomStateManagmentCallbacks(customGlobalState, customDispatch));
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
        
        <span className={styles.value}>{customGlobalState.counter.value}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={onSimpleIncrement}
          >
            +
          </button>
      </div>
    </div>
  );
}
