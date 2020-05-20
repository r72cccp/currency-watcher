import { combineReducers } from 'redux'
import { actionNames } from '../constants/currencyMonitorConstants'

const currencyRate = (state = {}, action) => {
  switch (action.type) {
    case actionNames.CURRENCY_MONITOR_TICKER_UPDATE:
      return action.result.currencyRate
    case `${actionNames.SET_FORCED_CURRENCY_RATE}__SUCCESS`:
      return action.result.currencyRate
    default:
      return state
  }
}

const forcedRates = (state = [], action) => {
  switch (action.type) {
    case `${actionNames.SET_FORCED_CURRENCY_RATE}__SUCCESS`:
      return action.result.forcedRates
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currencyRate,
  forcedRates,
})

export default rootReducer
