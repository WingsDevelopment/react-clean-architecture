import { useCallback } from "react";
import { useCounterStorage } from "../../common/infrastracture/redux/storeAdapters/CounterStorage";
import { domainIncrementByAmount } from "../domain/entities/DomainCounterModel";
import { IDomainApiRepository } from "../domain/repositoryInterfaces/IDomainApiRepository";
import { IDomainNotificationRepository } from "../domain/repositoryInterfaces/IDomainNotificationRepository";
import { IDomainStateManagement } from "../domain/stateManagement/DomainStateManagement";

export const useApplicationFetchAndIncrementByAmount = () => {
    const { incrementByAmount } = useCounterStorage();
    const { fetchAmountAsync } = IDomainApiRepository;
    const { notifyError, notifySuccess } = IDomainNotificationRepository;

    const applicationFetchAndIncrementByAmount = async (amount: number) => {
        
        try {
            console.log('uslo');
            const data = await fetchAmountAsync();
            incrementByAmount(data.amount + amount); 
            notifySuccess("Success");
            console.log('Success');
        }
        catch (err: any) {
            notifyError(err);
        }
    }
    
    return {applicationFetchAndIncrementByAmount};
}