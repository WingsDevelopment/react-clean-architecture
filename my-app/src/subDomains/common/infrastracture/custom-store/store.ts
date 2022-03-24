import { useEffect, useState } from 'react';
import { CounterSliceState, initialState } from './counterCustomStore';

let customGlobalState: CounterSliceState = initialState;
let listeners : any[] = [];
let actions = {};

export const useCustomStore = () => {
    const setState = useState(customGlobalState)[1];

    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners = listeners.filter(listener => listener !== setState);
        };
    }, [setState]);


    const customDispatch = (actionIdentifier: any, payload: any) => {
        const newState = (actions as any)[actionIdentifier](customGlobalState, payload);
        customGlobalState = { ...customGlobalState, ...newState };
        listeners.forEach(listener => listener(customGlobalState));
    };

    // const subscribe = (listener: any) => {
    //     listeners.push(listener);
    //     return () => {
    //         listeners = listeners.filter(l => l !== listener);
    //     };
    // };

    return {customGlobalState, customDispatch};
}

export const initStore = (userActions: any, initialState: any) => {
    if (initialState) {
        customGlobalState = { ...customGlobalState, ...initialState };
    }

    actions = { ...actions, ...userActions };
}