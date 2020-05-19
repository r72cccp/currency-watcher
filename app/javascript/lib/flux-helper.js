import { RestMethods } from '../bundles/CurrencyMonitor/constants/currencyMonitorConstants'
import { fetchJsonFromAPI } from '../lib/network'

export const createAsyncAction = (actionParams) => {
  const { actionName, method = RestMethods.get, path, params = {} } = actionParams
  return {
    promise: fetchJsonFromAPI({
      method,
      params,
      path,
    }),
    type: '',
    types: [
      `${actionName}__START`,
      `${actionName}__SUCCESS`,
      `${actionName}__FAILURE`,
    ]
  }
}

export const createSyncAction = (actionParams) => {
  const { actionName, result } = actionParams
  return {
    type: actionName,
    result,
  }
}
