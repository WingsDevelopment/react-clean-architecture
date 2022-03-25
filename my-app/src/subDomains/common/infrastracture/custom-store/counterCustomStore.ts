import { CounterUIState } from "../../../../userInterface/counter/counterUIState/CounterUIState";
import { domainCounterModel } from "../../../counter/domain/entities/DomainCounterModel";
import { IDomainStateManagement } from "../../../counter/domain/stateManagement/DomainStateManagementProvider";
import { initStore } from "./store";

export interface CounterSliceState {
    counter: domainCounterModel;
    uiState: CounterUIState;
}

export const initialState: CounterSliceState = {
    counter: {
        value: 0,
    },
    uiState: {
        isLoading: false,
        errorFetchMessage: '',
        state : 'idle',
    }
};

export const configureCustomStore = () => {
    const actions = {
        SET_COUNTER_STATE: (state: any, payload: any) => {
            return { ...state, counter: payload };
        }
    }

    initStore(actions, initialState);
}

export const getCustomStateManagmentCallbacks = (customGlobalState: CounterSliceState, customDispatch: any) : IDomainStateManagement => {
    return {
        getStateCallback : () => { return { ... customGlobalState.counter }},
        setStateCallback: (state: domainCounterModel) => customDispatch('SET_COUNTER_STATE', state)
    }
  }