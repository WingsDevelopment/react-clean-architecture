import { IDomainCounterRepository } from "../domain/repositoryInterfaces/IDomainApiRepository";
import { IDomainNotificationRepository } from "../domain/repositoryInterfaces/IDomainNotificationRepository";
import { ICounterStorage } from "../domain/stateManagement/CounterStorage";

type Dependencies = {
    counterStorage: ICounterStorage,
    counterRepository: IDomainCounterRepository,
    notificationService: IDomainNotificationRepository
};

export const applicationFetchAndIncrementByAmount = async (
    amount: number,
    dependencies: Dependencies
) => {
    debugger;

    const { counterStorage, counterRepository, notificationService } = dependencies;

    try {
        console.log('uslo');
        const data = await counterRepository.fetchAmountAsync();
        counterStorage.incrementByAmount(data.amount + amount); 
        notificationService.notifySuccess("Success");
        console.log('Success');
    }
    catch (err: any) {
        notificationService.notifyError(err);
    }
    
}