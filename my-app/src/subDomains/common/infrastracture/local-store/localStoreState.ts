import { CounterUIState } from "../../../../userInterface/counter/counterUIState/CounterUIState";
import { domainCounterModel } from "../../../counter/domain/entities/DomainCounterModel";

interface CounterLocalState {
    counter: domainCounterModel;
    uiState: CounterUIState;
}
export const initialLocalState: CounterLocalState = {
    counter: {
        value: 0,
    },
    uiState: {
        isLoading: false,
        errorFetchMessage: '',
        state : 'idle',
    }
};