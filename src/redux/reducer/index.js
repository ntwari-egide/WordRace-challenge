/**
 * @author: ntwari egide
 * @description: Root reducer
 */


import { combineReducers } from "redux";
import { scoreReducer } from "./score.reducer";
import { statisticsReducer } from "./stats.reducer";

export const rootReducer = combineReducers({
    score: scoreReducer,
    stats: statisticsReducer
})