import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import consumer from '../../../channels/consumer'
console.log('#7 - tickerChannel.js')
const subscribeToChannel = (updateTicker) => {
  consumer.subscriptions.create("TickerChannel", {
    connected() {
      console.log('#5 - connected')
    },

    disconnected() {
      console.log('#9 - disconnected')
    },

    received(data) {
      console.log('#16', { data }) //, store, state: store.getState() })
      updateTicker(data)
    }
  })
}


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
    pair,
    sell,
    ticker,
  } = currencyRate
  const currentTime = new Date(ticker * 1000)
  return (
    <div>
      <h3>
        Currency rate at {currentTime.toString()}
      </h3>
      <hr />
      {pair}. Buy: {buy}, Sell: {sell}
    </div>
  )
}

CurrencyMonitor.propTypes = {
  currencyRate: PropTypes.shape({
    pair: PropTypes.string.isRequired,
    buy: PropTypes.string.isRequired,
    sell: PropTypes.string.isRequired,
    ticker: PropTypes.number.isRequired,
  }),
}

export default CurrencyMonitor
