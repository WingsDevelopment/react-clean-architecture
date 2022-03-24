import { CounterUIState } from "../../../../userInterface/counter/counterUIState/CounterUIState";
import { xxxCounterModel } from "../../../counter/domain/entities/CounterModel";
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
