/**
 * @author: ntwari egide 
 * @description: all score actions
 */

import axios from "axios"
import { headers } from "../../constants/axios.headers"
import { store } from "../store"
import * as actions from "../actions/action-types"
import { message } from "antd"

export const getTop10Score = async () => {
    
    const url = 'api/v1/scores/get-top-10'

    try {
        await axios.get(url,{
            headers: headers
        })
        .then( res => {
            store.dispatch({
                type: actions.GET_TOP_10_SCORES,
                payload: res.data.data
            })

            // message.success("Getting top 10 scores is successfully done!")
        })
    } catch (error) {
        // message.error('Failed getting top 10 scores, Try again')
    }
}


export const getScoreStats = async () => {
    
    const url = 'api/v1/scores/get-score-statistics'

    try {
        await axios.get(url,{
            headers: headers
        })
        .then( res => {
            store.dispatch({
                type: actions.GET_SCORE_STATS,
                payload: res.data.data
            })
        })
    } catch (error) {
        // message.error('Failed getting score stats, Try again')
    }
}


export const saveNewScore = async (newscore) => {
    const url = 'api/v1/scores'

    try {
        await axios.post(url,newscore,{
            headers: headers
        })
        .then( res => {
           
            message.success("Data is rendered successfully")
        })
    } catch (error) {
        // message.error('Failed to save score, Try again')
    }
}