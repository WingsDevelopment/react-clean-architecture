import { useState } from 'react';

import { getCustomStateManagmentCallbacks } from '../../../../subDomains/common/infrastracture/custom-store/counterCustomStore';
import { useCustomStore } from '../../../../subDomains/common/infrastracture/custom-store/store';
import { applicationFetchAndIncrementByAmount } from '../../../../subDomains/counter/application/ApplicationFetchAndIncrementByAmount';
import { applicationSimpleIncrement } from '../../../../subDomains/counter/application/ApplicationSimpleIncrement';

import styles from './CustomStoreCounter.module.css';

//USES CUSTOM STORE
export function CustomStoreCounter() {
  const {customGlobalState, customDispatch} = useCustomStore(); 
  const [amount,] = useState(2);

  const fetchAndIncrementByAmountAsync = async () => {
    await applicationFetchAndIncrementByAmount(
        getCustomStateManagmentCallbacks(customGlobalState, customDispatch),
        { amount });
  };

  const onSimpleIncrement = () => {
    applicationSimpleIncrement(getCustomStateManagmentCallbacks(customGlobalState, customDispatch));
  };

  return (
    <div>
      <div className={styles.row}>
        <button
            className={styles.button}
            aria-label="CUCA"
            onClick={fetchAndIncrementByAmountAsync}
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
