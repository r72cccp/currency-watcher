import { createStore } from 'redux'
import rootReducer from '../reducers/currencyMonitorReducer'

const configureStore = (railsProps) => (
  createStore(rootReducer, railsProps)
)

export default configureStore
