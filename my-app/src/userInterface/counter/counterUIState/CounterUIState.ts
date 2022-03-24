export interface CounterUIState {
    isFatching: boolean;
    errorFetchMessage: string;
    state: "idle" | "loading" | "failed";
}

export const getUiStateOnSuccess = (): CounterUIState => ({
    isFatching: false,
    errorFetchMessage: "",
    state: "idle",
});

export const getUiStateOnFetching = (): CounterUIState => ({
    isFatching: true,
    errorFetchMessage: "",
    state: "loading",
});

export const getUiStateOnFailed = (error: string): CounterUIState => ({
    isFatching: false,
    errorFetchMessage: error,
    state: "failed",
});