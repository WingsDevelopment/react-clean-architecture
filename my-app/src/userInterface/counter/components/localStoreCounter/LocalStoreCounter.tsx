import { useState } from 'react';

import { applicationFetchAndIncrementByAmount } from '../../../../subDomains/counter/application/ApplicationFetchAndIncrementByAmount';
import { applicationSimpleIncrement } from '../../../../subDomains/counter/application/ApplicationSimpleIncrement';
import { domainCounterModel } from '../../../../subDomains/counter/domain/entities/DomainCounterModel';
import { IDomainStateManagement } from '../../../../subDomains/counter/domain/stateManagement/DomainStateManagement';
import { CounterUIState } from '../../counterUIState/CounterUIState';

import styles from './LocalStoreCounter.module.css';

interface CounterLocalState {
    counter: domainCounterModel;
    uiState: CounterUIState;
}
const initialState: CounterLocalState = {
    counter: {
        value: 0,
    },
    uiState: {
        isLoading: false,
        errorFetchMessage: '',
        state : 'idle',
    }
};

export const getLocalStateManagmentCallbacks = (localState: domainCounterModel, setLocalState: any) : IDomainStateManagement => {
    return {
        getStateCallback : () => { return { ...localState }},
        setStateCallback: (state: domainCounterModel) => setLocalState(state),
    }
}

//USES CUSTOM STORE
export function LocalStoreCounter() {
  const [localState, setLocalState] = useState<domainCounterModel>(initialState.counter); 
  const paramAmount = 2;
  //const [localUiState, setLocalUiState] = useState<CounterUIState>(initialState.uiState); 

  const fetchAndIncrementByAmountAsync = async () => {
    await applicationFetchAndIncrementByAmount(
        getLocalStateManagmentCallbacks(localState, setLocalState),
        { amount: paramAmount });
  };

  const onSimpleIncrement = () => {
    applicationSimpleIncrement(getLocalStateManagmentCallbacks(localState, setLocalState))
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
        
        <span className={styles.value}>{localState.value}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={onSimpleIncrement}
          >
            +
          </button>
      </div>
        {/* <p>
            {localUiState.isLoading ? 'Loading...' : 'Loaded'}
        </p>
        <p>
            State: {localUiState.state}
        </p>
        <p>
            {localUiState.errorFetchMessage && localUiState.errorFetchMessage}
        </p> */}
    </div>
  );
}
