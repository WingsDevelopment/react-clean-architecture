import { domainCounterModel } from '../../../../subDomains/counter/domain/entities/DomainCounterModel';
import { CounterUIState } from '../../counterUIState/CounterUIState';

import styles from './SimpleCustomStoreCounter.module.css';

interface Props {
  counter: domainCounterModel;
  uiState: CounterUIState;
  onFetchAndIncrementByAmountAsync: () => void;
  onSimpleIncrement: () => void;
}

//USES CUSTOM STORE
export const SimpleCustomStoreCounter : React.FC<Props> = ({
  counter,
  uiState,
  onFetchAndIncrementByAmountAsync, 
  onSimpleIncrement
}) => {
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
        
        <span className={styles.value}>{counter.value}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={onSimpleIncrement}
          >
            +
          </button>
      </div>
      <p>
        {uiState.isLoading ? 'Loading...' : 'Loaded'}
      </p>
      <p>
        State: {uiState.state}
      </p>
      <p>
        {uiState.errorFetchMessage && uiState.errorFetchMessage}
      </p>
    </div>
  );
}
