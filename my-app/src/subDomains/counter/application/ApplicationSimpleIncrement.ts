import { useCounterStorage } from "../../common/infrastracture/redux/storeAdapters/CounterStorage";
import { domainIncrement } from "../domain/entities/DomainCounterModel";
import { IDomainStateManagement } from "../domain/stateManagement/DomainStateManagement";

//simple usecase
export const applicationSimpleIncrement = ()  => {
    const { increment } = useCounterStorage();

    increment();
}