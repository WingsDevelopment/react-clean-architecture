import { useState } from 'react';
import { initialLocalState } from '../../../../subDomains/common/infrastracture/local-store/localStoreState';
import { useApplicationFetchAndIncrementByAmount } from '../../../../subDomains/common/infrastracture/local-store/useApplicationFetchAndIncrementByAmount';
import { useApplicationSimpleIncrement } from '../../../../subDomains/common/infrastracture/local-store/useApplicationSimpleIncrement';

import { domainCounterModel } from '../../../../subDomains/counter/domain/entities/DomainCounterModel';

import styles from './LocalStoreCounter.module.css';

export function LocalStoreCounter() {
  const [localState, setLocalState] = useState<domainCounterModel>(initialLocalState.counter); 
  const paramAmount = 2;
  const { fetchAndIncrementByAmount } = useApplicationSimpleIncrement();
  const { fetchAndIncrementByAmountAsync, error, isLoading, uiState } = useApplicationFetchAndIncrementByAmount();

  const onFetchAndIncrementByAmountAsync = async () => {
    await fetchAndIncrementByAmountAsync(localState, setLocalState, paramAmount);
  };

  const onSimpleIncrement = () => {
    fetchAndIncrementByAmount(localState, setLocalState);
  };

  return (
    <div>
      <div className={styles.row}>
        <button
            className={styles.button}
            aria-label="CUCA"
            onClick={onFetchAndIncrementByAmountAsync}
          >
            cuca
        </button>
        
        <span className={styles.value}>{localState.value}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={onSimpleIncrement}
          >
            +
          </button>
      </div>
        <p>
            {isLoading ? 'Loading...' : 'Loaded'}
        </p>
        <p>
            State: {uiState}
        </p>
        <p>
            {error && error}
        </p>
    </div>
  );
}
