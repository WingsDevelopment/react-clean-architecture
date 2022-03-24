
//mozda treba CounterModel?
export interface CounterState {
    value: number;
    isLoading: boolean;
    status: 'idle' | 'loading' | 'failed';
}

export const xxxIncrement = (state: CounterState) => {
    state.value += 1;
}

export const xxxDecrement = (state: CounterState) => {
    state.value += -1;
}

export const xxxIncrementByAmount = (state: CounterState, amount: number) => {
    state.value += amount;
}