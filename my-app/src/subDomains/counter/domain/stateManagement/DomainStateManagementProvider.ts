import { domainCounterModel } from "../entities/DomainCounterModel";

export interface IDomainStateManagement {
    getStateCallback: () => domainCounterModel; //function that returns model
    setStateCallback: (state: domainCounterModel) => void; //function that sets new state
}