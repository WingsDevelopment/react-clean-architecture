import { domainCounterModel } from "../entities/DomainCounterModel";

export interface CounterStorage {
    getValue(): domainCounterModel; // Can also be `CounterValue`, depends on your preferences.
    
    increment(): void;
    decrement(): void;
    incrementByAmount(amount: number): void;
}