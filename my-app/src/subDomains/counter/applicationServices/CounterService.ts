import { CounterState, xxxIncrement, xxxIncrementByAmount } from "../domain/entities/CounterState";
import { IApiRepository } from "../domain/repositoryInterfaces/IApiRepository";
import { INotificationRepository } from "../domain/repositoryInterfaces/INotificationRepository";

const xxxComplexUseCase = async (
    getCounterCallback: () => CounterState, 
    setCounterCallback: (state: CounterState) => void, 
    params : {
        amountParams: number,
    }
) => {
    //dependency injection
    const { fetchAmountAsync } = IApiRepository;
    const { notifyError, notifySuccess } = INotificationRepository;
    let _state = getCounterCallback();
    
    //usecase implementation
    try {
        //state manipulation
        const data = await fetchAmountAsync(); //data.amount = 3
        xxxIncrement(_state);
        xxxIncrementByAmount(_state, data.amount + params.amountParams);
        //state update
        setCounterCallback(_state);
        notifySuccess("Success");
    }
    catch (err: any) {
        //revert i partial update je malo hacky.. :(
        notifyError(err);
    }
}

export const CounterService = {
    xxxComplexUseCase,
}