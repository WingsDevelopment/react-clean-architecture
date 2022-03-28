import { domainCounterModel } from "../../../counter/domain/entities/DomainCounterModel"
import { IDomainStateManagement } from "../../../counter/domain/stateManagement/DomainStateManagement"

export const getLocalStateManagmentCallbacks = (localState: domainCounterModel, setLocalState: any) : IDomainStateManagement => {
    return {
        getStateCallback : () => { return { ...localState }},
        setStateCallback: (state: domainCounterModel) => setLocalState(state),
    }
}