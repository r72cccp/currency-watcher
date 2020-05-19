import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { subscribeToChannel } from '../../../channels/ticker_channel'

const CurrencyMonitor = ({ currencyRate, updateTicker }) => {
  const [subscribed, subscribe] = useState(0)
  useEffect(() => {
    if (!subscribed) {
      subscribeToChannel(updateTicker)
      subscribe(true)
    }
  })
  const {
    buy,
    forced,
    pair,
    sell,
    ticker,
  } = currencyRate
  const currentTime = new Date(ticker * 1000)
  const at = forced ? 'till' : 'at'

  return (
    <div>
      <h3>
        Currency rate {at} {currentTime.toString()}
      </h3>
      <hr />
      {pair}. Buy: {buy}, Sell: {sell}
    </div>
  )
}

CurrencyMonitor.propTypes = {
  currencyRate: PropTypes.shape({
    pair: PropTypes.string.isRequired,
    forced: PropTypes.bool,
    buy: PropTypes.string.isRequired,
    sell: PropTypes.string.isRequired,
    ticker: PropTypes.number.isRequired,
  }),
}

export default CurrencyMonitor
