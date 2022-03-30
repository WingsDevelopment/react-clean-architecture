import { useState } from 'react';
import { initialLocalState } from '../../../../../subDomains/common/infrastracture/local-store/localStoreState';
import { useFetchAndIncrementByAmount } from '../../../../../subDomains/common/infrastracture/local-store/useApplicationFetchAndIncrementByAmount';
import { useApplicationSimpleIncrement } from '../../../../../subDomains/common/infrastracture/local-store/useApplicationSimpleIncrement';

import { domainCounterModel } from '../../../../../subDomains/counter/domain/entities/DomainCounterModel';
import { SimpleCustomStoreCounter } from '../SimpleCustomStoreCounter';

export function LocalStoreCounter() {
  const [localState, setLocalState] = useState<domainCounterModel>(initialLocalState.counter); 
  const paramAmount = 2;
  const { fetchAndIncrementByAmount } = useApplicationSimpleIncrement();
  const { fetchAndIncrementByAmountAsync, error, isLoading, uiState } = useFetchAndIncrementByAmount();

  const onFetchAndIncrementByAmountAsync = async () => {
    await fetchAndIncrementByAmountAsync(localState, setLocalState, paramAmount);
  };

  const onSimpleIncrement = () => {
    fetchAndIncrementByAmount(localState, setLocalState);
  };

  return (
    <>
      <SimpleCustomStoreCounter
        counter={localState}
        uiState={
          {
            isLoading,
            state: uiState,
            errorFetchMessage: error
          }
        }
        onFetchAndIncrementByAmountAsync={onFetchAndIncrementByAmountAsync}
        onSimpleIncrement={onSimpleIncrement} />
    </>
  );
}
