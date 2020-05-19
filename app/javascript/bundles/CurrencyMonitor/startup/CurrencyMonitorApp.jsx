import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../store/currencyMonitorStore'
import { Router } from '../../../routes/index'

const CurrencyMonitorApp = (props) => {
  return (
    <Provider store={configureStore(props)}>
      <Router />
    </Provider>
  )
}

export default CurrencyMonitorApp
