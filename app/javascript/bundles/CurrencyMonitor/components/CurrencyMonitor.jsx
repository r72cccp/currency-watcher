import PropTypes from 'prop-types'
import React from 'react'

const CurrencyMonitor = ({ currencyRate }) => {
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
