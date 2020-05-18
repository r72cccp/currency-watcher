import { combineReducers } from 'redux'
import { CURRENCY_MONITOR_TICKER_UPDATE } from '../constants/currencyMonitorConstants'

const currencyRate = (state = '', action) => {
  switch (action.type) {
    case CURRENCY_MONITOR_TICKER_UPDATE:
      return action.currencyRate
    default:
      return state
  }
}

const currencyMonitorReducer = combineReducers({ currencyRate })

export default currencyMonitorReducer
