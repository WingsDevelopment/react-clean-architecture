import { IDomainCounterRepository } from '../domain/repositoryInterfaces/IDomainApiRepository';
import { IDomainNotificationRepository } from '../domain/repositoryInterfaces/IDomainNotificationRepository';
import { ICounterStorage } from '../domain/stateManagement/CounterStorage';
import { applicationFetchAndIncrementByAmount } from './ApplicationFetchAndIncrementByAmount';
import { applicationSimpleIncrement } from './ApplicationSimpleIncrement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { resolve } from 'inversify-react';
import { MYTYPES } from '../../..';

@injectable()
export class CounterService {
    @resolve(MYTYPES.CounterStorage)
    private CounterStorage: ICounterStorage;
    @resolve(MYTYPES.CounterRepository)
    private CounterRepository: IDomainCounterRepository;
    @resolve(MYTYPES.NotificationRepository)
    private NotificationRepository: IDomainNotificationRepository;
  
    applicationFetchAndIncrementByAmount = async (amount: number) => 
        await applicationFetchAndIncrementByAmount(amount, {
            counterStorage: this.CounterStorage,
            counterRepository: this.CounterRepository,
            notificationService: this.NotificationRepository
            });
    
    applicationSimpleIncrement = () => applicationSimpleIncrement({
        counterStorage: this.CounterStorage
    });
}