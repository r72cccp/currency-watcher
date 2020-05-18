import { combineReducers } from 'redux'
import { CURRENCY_MONITOR_NAME_UPDATE } from '../constants/currencyMonitorConstants'

const name = (state = '', action) => {
  switch (action.type) {
    case CURRENCY_MONITOR_NAME_UPDATE:
      return action.text
    default:
      return state
  }
}

const currencyMonitorReducer = combineReducers({ name })

export default currencyMonitorReducer
