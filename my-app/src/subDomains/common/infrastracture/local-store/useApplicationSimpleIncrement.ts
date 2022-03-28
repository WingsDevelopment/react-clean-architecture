import { useCallback } from "react";
import { applicationSimpleIncrement } from "../../../counter/application/ApplicationSimpleIncrement";
import { domainCounterModel } from "../../../counter/domain/entities/DomainCounterModel";
import { getLocalStateManagmentCallbacks } from "./callbackProvider";

export const useApplicationSimpleIncrement = () => {
    const fetchAndIncrementByAmount = useCallback((localState: domainCounterModel, setLocalState: any) => {
        applicationSimpleIncrement(
            getLocalStateManagmentCallbacks(localState, setLocalState));
    }, []);

    return {
        fetchAndIncrementByAmount,
    }
}