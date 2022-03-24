import { useState } from 'react';

import styles from './CustomCounter.module.css';
import { useCustomStore } from '../../../../subDomains/common/infrastracture/custom-store/store';
import { CounterService } from '../../../../subDomains/counter/applicationServices/CounterService';
import { xxxCounterModel } from '../../../../subDomains/counter/domain/entities/CounterModel';


//USES CUSTOM STORE
export function CustomCounter() {
  const {customGlobalState, customDispatch} = useCustomStore(); 
  
  const [incrementAmount,] = useState(2);
  const incrementValue = Number(incrementAmount) || 0;

  const onComplexUseCaseAsync = async () => {
    await CounterService.xxxComplexUseCaseAsync(
        // get state callback
        () : xxxCounterModel => { return { ... customGlobalState.counter }}, 
        // callback za dispatchovanje akcije -> setCounterState
        (state: xxxCounterModel) => customDispatch('SET_COUNTER_STATE', state), 
        //params
        {amountParams: incrementValue});
  };

  const onSimpleIncrement = () => {
    CounterService.xxxSimpleIncrement(
        // get state callback
        () : xxxCounterModel => { return { ... customGlobalState.counter }}, 
        // callback za dispatchovanje akcije -> setCounterState
        (state: xxxCounterModel) => customDispatch('SET_COUNTER_STATE', state));
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
