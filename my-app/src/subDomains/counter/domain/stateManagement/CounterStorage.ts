import { domainCounterModel } from "../entities/DomainCounterModel";

export interface ICounterStorage {
    getValue(): domainCounterModel; // Can also be `CounterValue`, depends on your preferences.
    
    increment(): void;
    decrement(): void;
    incrementByAmount(amount: number): void;
}