import { CounterUIState } from "../../../../userInterface/counter/counterUIState/CounterUIState";
import { xxxCounterModel } from "../../../counter/domain/entities/CounterModel";
import { IStateManagement } from "../../../counter/domain/stateManagement/StateManagementProvider";
import { initStore } from "./store";

export interface CounterSliceState {
    counter: xxxCounterModel;
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

export const getCustomStateManagmentCallbacks = (customGlobalState: CounterSliceState, customDispatch: any) : IStateManagement => {
    return {
        getStateCallback : () => { return { ... customGlobalState.counter }},
        setStateCallback: (state: xxxCounterModel) => customDispatch('SET_COUNTER_STATE', state)
    }
  }