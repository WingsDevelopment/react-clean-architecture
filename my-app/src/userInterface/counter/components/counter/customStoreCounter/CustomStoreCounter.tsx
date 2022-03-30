import { getCustomStateManagmentCallbacks } from '../../../../../subDomains/common/infrastracture/custom-store/counterCustomStore';
import { useCustomStore } from '../../../../../subDomains/common/infrastracture/custom-store/store';
import { applicationFetchAndIncrementByAmount } from '../../../../../subDomains/counter/application/ApplicationFetchAndIncrementByAmount';
import { applicationSimpleIncrement } from '../../../../../subDomains/counter/application/ApplicationSimpleIncrement';

import { SimpleCustomStoreCounter } from '../SimpleCustomStoreCounter';

//USES CUSTOM STORE
export function CustomStoreCounter() {
  const {customGlobalState, customDispatch} = useCustomStore(); 
  const paramAmount = 3;

  const onFetchAndIncrementByAmountAsync = async () => {
    await applicationFetchAndIncrementByAmount(
        getCustomStateManagmentCallbacks(customGlobalState, customDispatch),
        { amount: paramAmount });
  };

  const onSimpleIncrement = () => {
    applicationSimpleIncrement(getCustomStateManagmentCallbacks(customGlobalState, customDispatch));
  };

  return (
    <>
      <SimpleCustomStoreCounter 
        counter={customGlobalState.counter}
        uiState={{
          isLoading: false,
          state: 'idle',
          errorFetchMessage: '',
        }}
        onFetchAndIncrementByAmountAsync={onFetchAndIncrementByAmountAsync}
        onSimpleIncrement={onSimpleIncrement} />
    </>
  );
}
