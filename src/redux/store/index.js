/**
 * @author: ntwari egide
 * @description: score state store
 */


import { createStore } from "redux";
import { rootReducer } from "../reducer";

export const store = createStore(rootReducer)