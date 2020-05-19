import { combineReducers } from 'redux'
import { actionNames } from '../constants/currencyMonitorConstants'

const currencyRate = (state = '', action) => {
  switch (action.type) {
    case actionNames.CURRENCY_MONITOR_TICKER_UPDATE:
      return action.result.currencyRate
    default:
      return state
  }
}

const currencyMonitorReducer = combineReducers({ currencyRate })

export default currencyMonitorReducer
