import { domainIncrement } from "../domain/entities/DomainCounterModel";
import { IDomainStateManagement } from "../domain/stateManagement/DomainStateManagement";

//simple usecase
export const applicationSimpleIncrement = (stateManagement: IDomainStateManagement)  => {
    let _state = stateManagement.getStateCallback();
    
    domainIncrement(_state);
    
    stateManagement.setStateCallback(_state);
}