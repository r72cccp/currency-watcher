import PropTypes from 'prop-types'
import React from 'react'

const AdminPage = ({ currencyRate, setForcedCurrencyRate }) => {
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
      <button onClick={() => setForcedCurrencyRate({ buy: 77.22222, sell: 88.2222222, pair: 'USD/RUB', expiredAt: '2020-05-19 23:57:12' })}>set forced</button>
    </div>
  )
}

AdminPage.propTypes = {
  currencyRate: PropTypes.shape({
    pair: PropTypes.string.isRequired,
    buy: PropTypes.string.isRequired,
    sell: PropTypes.string.isRequired,
    ticker: PropTypes.number.isRequired,
  }),
  setForcedCurrencyRate: PropTypes.func.isRequired,
}

export default AdminPage
