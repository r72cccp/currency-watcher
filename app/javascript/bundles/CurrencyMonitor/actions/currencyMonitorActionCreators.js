import { actionNames, RestMethods } from '../constants/currencyMonitorConstants'
import { createSyncAction, createAsyncAction } from '../../../lib/flux-helper'

export const updateTicker = ({ currencyRate }) => {
  return createSyncAction({ actionName: actionNames.CURRENCY_MONITOR_TICKER_UPDATE, result: { currencyRate } })
}

export const setForcedCurrencyRate = ({ pair, buy, sell, expiredAt }) => {
  return createAsyncAction({
    actionName: actionNames.SET_FORCED_CURRENCY_RATE,
    method: RestMethods.post,
    params: { pair, buy, sell, expiredAt },
    path: '/admin'
  })
}
