import { useCallback, useState } from "react";
import { applicationFetchAndIncrementByAmount } from "../../../counter/application/ApplicationFetchAndIncrementByAmount";
import { domainCounterModel } from "../../../counter/domain/entities/DomainCounterModel";
import { getLocalStateManagmentCallbacks } from "./callbackProvider";

export const useApplicationFetchAndIncrementByAmount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [uiState, setUiState] = useState('idle');

    const fetchAndIncrementByAmountAsync = useCallback(async (localState: domainCounterModel, 
        setLocalState: any, amount: number) => {
        setIsLoading(true);
        setError('');
        setUiState('loading');

        try {
            await applicationFetchAndIncrementByAmount(
                getLocalStateManagmentCallbacks(localState, setLocalState),
                { amount });

            setUiState('success');
        } catch (error: any) {
            setError(error.message);
            setUiState('error');
        } finally {
            setIsLoading(false);
        }
    }, [setUiState, setError, setIsLoading]);

    return {
        fetchAndIncrementByAmountAsync,
        isLoading,
        error,
        uiState,
    }
}