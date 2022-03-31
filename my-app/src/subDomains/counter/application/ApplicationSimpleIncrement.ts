import { ICounterStorage } from "../domain/stateManagement/CounterStorage";

type Dependencies = {
    counterStorage: ICounterStorage,
}

//simple usecase
export const applicationSimpleIncrement = (
    dependencies: Dependencies
)  => {
    const { counterStorage } = dependencies;

    counterStorage.increment();
}