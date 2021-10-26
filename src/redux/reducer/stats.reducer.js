/**
 * @author: ntwari egide
 * @description: score stats reducer container
 */

import * as actions from "../actions/action-types"


const initialstate = []

export const statisticsReducer = (state = initialstate, action) => {

    switch (action.type) {
        case actions.GET_SCORE_STATS:

            return action.payload    
        default:
            return state
    }
}