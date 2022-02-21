import { createContext } from "react";
import { store } from "../Redux/store";
export const ReduxContext= createContext();

export const ReduxProvider = ({ children }) => {
    const { dispatch, getState } = store;
    const state = {  dispatch, getState };
    return <ReduxContext.Provider value={state}>{children}</ReduxContext.Provider>;
};


 

