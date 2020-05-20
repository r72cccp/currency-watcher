import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/currencyMonitorReducer'
import { promiseMiddleware } from '../../../middlewares/promiseMiddleware'

export const configureStore = (railsProps) => {
  return createStore(rootReducer, railsProps, composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(promiseMiddleware)
  ))
}
