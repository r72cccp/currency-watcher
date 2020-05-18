import { createStore } from 'redux'
import currencyMonitorReducer from '../reducers/currencyMonitorReducer'

const configureStore = (railsProps) => (
  createStore(currencyMonitorReducer, railsProps)
)

export default configureStore
