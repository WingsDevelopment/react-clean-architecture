import { xxxCounterModel, xxxIncrement, xxxIncrementByAmount } from "../domain/entities/CounterModel";
import { IApiRepository } from "../domain/repositoryInterfaces/IApiRepository";
import { INotificationRepository } from "../domain/repositoryInterfaces/INotificationRepository";

//verovatno bolje file po usecaseu jer ce se nagojiti ovako...

const xxxComplexUseCaseAsync = async (
    getCounterCallback: () => xxxCounterModel, 
    setCounterCallback: (state: xxxCounterModel) => void, 
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
        setCounterCallback(_state); //+6 je sveukupno (nakon 2 sec)
        notifySuccess("Success");
    }
    catch (err: any) {
        //revert i partial update bi bio malo hacky?.. :(
        notifyError(err);
    }
}

//simple usecase
const xxxSimpleIncrement = (
    getCounterCallback: () => xxxCounterModel, 
    setCounterCallback: (state: xxxCounterModel) => void
) => {
    let _state = getCounterCallback();
    //mutate state
    xxxIncrement(_state);
    //update state
    setCounterCallback(_state);
}

export const CounterService = {
    xxxComplexUseCaseAsync,
    xxxSimpleIncrement,
}