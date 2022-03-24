export interface CounterUIState {
    isLoading: boolean;
    errorFetchMessage: string;
    state: "idle" | "loading" | "failed";
}

export const getUiStateOnSuccess = (): CounterUIState => ({
    isLoading: false,
    errorFetchMessage: "",
    state: "idle",
});

export const getUiStateOnFetching = (): CounterUIState => ({
    isLoading: true,
    errorFetchMessage: "",
    state: "loading",
});

export const getUiStateOnFailed = (error: string): CounterUIState => ({
    isLoading: false,
    errorFetchMessage: error,
    state: "failed",
});