/**
 * @author: ntwari egide
 * @description: score reducer container
 */

import * as actions from "../actions/action-types"
const intialscorestate = []

export const scoreReducer = (state = intialscorestate, action) => {
    switch (action.type) {
        case actions.GET_TOP_10_SCORES:
            return action.payload
    
        case actions.SAVE_SCORE:

            return [
                ...state,
                action.payload
            ]

        default:
            return state
    }
}