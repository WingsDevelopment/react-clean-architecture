import { domainIncrementByAmount } from "../domain/entities/DomainCounterModel";
import { IDomainApiRepository } from "../domain/repositoryInterfaces/IDomainApiRepository";
import { IDomainNotificationRepository } from "../domain/repositoryInterfaces/IDomainNotificationRepository";
import { IDomainStateManagement } from "../domain/stateManagement/DomainStateManagement";

export const applicationFetchAndIncrementByAmount = async (stateManagement: IDomainStateManagement, params : {
        amount: number,
    }
) => {
    //dependency injection
    const { fetchAmountAsync } = IDomainApiRepository;
    const { notifyError, notifySuccess } = IDomainNotificationRepository;
    let _state = stateManagement.getStateCallback();
    
    //usecase implementation
    try {
        //state manipulation
        const data = await fetchAmountAsync(); //fetch data from api
        domainIncrementByAmount(_state, data.amount + params.amount); // increment by params amount and api data amount
        
        stateManagement.setStateCallback(_state);
        notifySuccess("Success");
    }
    catch (err: any) {
        notifyError(err);
    }
}