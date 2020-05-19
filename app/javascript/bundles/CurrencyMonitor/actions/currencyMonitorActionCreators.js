import { CURRENCY_MONITOR_TICKER_UPDATE } from '../constants/currencyMonitorConstants'

export const updateTicker = ({ currencyRate }) => ({
  type: CURRENCY_MONITOR_TICKER_UPDATE,
  currencyRate,
})

// export const updateTickerAsync = (data) => {
//   return (dispatch) => {
//     dispatch(updateTicker(data))
//   }
// }
