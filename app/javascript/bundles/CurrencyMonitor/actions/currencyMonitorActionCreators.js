/* eslint-disable import/prefer-default-export */

import { CURRENCY_MONITOR_NAME_UPDATE } from '../constants/currencyMonitorConstants'

export const updateName = (text) => ({
  type: CURRENCY_MONITOR_NAME_UPDATE,
  text,
})
