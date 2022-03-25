import { xxxCounterModel } from "../entities/CounterModel";

export interface IStateManagement {
    getStateCallback: () => xxxCounterModel; 
    setStateCallback: (state: xxxCounterModel) => void;
}