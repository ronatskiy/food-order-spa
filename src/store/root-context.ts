import React from "react";
import Store from "./store";

const defaultStore = new Store({} as any);

export default React.createContext<Store>(defaultStore);
