import { useEffect, useState } from 'react';

let customGlobalState: any = {};
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

    return {customGlobalState, customDispatch};
}

export const initStore = (userActions: any, initialState: any) => {
    if (initialState) {
        customGlobalState = { ...customGlobalState, ...initialState };
    }

    actions = { ...actions, ...userActions };
}