/**
 * @author: ntwari egide
 * @description: Root reducer
 */


import { combineReducers } from "redux";
import { scoreReducer } from "./score.reducer";

export const rootReducer = combineReducers({
    score: scoreReducer
})