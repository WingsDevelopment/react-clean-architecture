import { inject, injectable } from 'inversify';
import { MYTYPES } from "../../..";
import { IDomainCounterRepository } from '../domain/repositoryInterfaces/IDomainApiRepository';
import { IDomainNotificationRepository } from '../domain/repositoryInterfaces/IDomainNotificationRepository';
import { ICounterStorage } from '../domain/stateManagement/CounterStorage';
import { applicationFetchAndIncrementByAmount } from './ApplicationFetchAndIncrementByAmount';
import { applicationSimpleIncrement } from './ApplicationSimpleIncrement';

@injectable()
export class CounterService {
    constructor(@inject(MYTYPES.CounterStorage) private counterStorage: ICounterStorage,
        @inject(MYTYPES.CounterRepository) private counterRepository: IDomainCounterRepository,
        @inject(MYTYPES.NotificationRepository) private notificationService: IDomainNotificationRepository) {}
  
    applicationFetchAndIncrementByAmount = async (amount: number) => 
        await applicationFetchAndIncrementByAmount(amount, {
            counterStorage: this.counterStorage,
            counterRepository: this.counterRepository,
            notificationService: this.notificationService
            });
    
    applicationSimpleIncrement = () => applicationSimpleIncrement({
        counterStorage: this.counterStorage
    });
}