import { initialValues, reducer } from "./reducer";
import React, { useMemo, useReducer } from "react";
import GlobalContext from "./GlobalContext";

const GlobalStateProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(reducer, initialValues);
  const value = useMemo(() => [globalState, globalDispatch], [globalState]);
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalStateProvider;
