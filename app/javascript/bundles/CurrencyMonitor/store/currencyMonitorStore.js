import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/currencyMonitorReducer'

export const configureStore = (railsProps) => {
  return createStore(rootReducer, railsProps, composeWithDevTools(
    applyMiddleware(thunk)
  ))
}
