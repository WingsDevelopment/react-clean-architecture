export interface xxxCounterModel {
    value: number;
}

export const xxxIncrement = (state: xxxCounterModel) => {
    state.value += 1;
}

export const xxxDecrement = (state: xxxCounterModel) => {
    state.value += -1;
}

export const xxxIncrementByAmount = (state: xxxCounterModel, amount: number) => {
    state.value += amount;
}