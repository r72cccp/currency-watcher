import PropTypes from 'prop-types'
import React, { useState } from 'react'

const AdminPage = ({ currencyRate, forcedRates, setForcedCurrencyRate }) => {
  const {
    buy,
    pair,
    sell,
    ticker,
  } = currencyRate
  const [formFields, setFormFields] = useState({
    expiredAt: '2020-05-20 01:00:02',
    newBuyValue: buy,
    newSellValue: sell,
  })
  const currentTime = new Date(ticker * 1000)
  const updateFormField = (fieldName) => {
    return (e) => {
      const value = e.currentTarget.value
      setFormFields({
        ...formFields,
        [fieldName]: value,
      })
    }
  }

  const handleSetForcedCurrencyRate = () => {
    setForcedCurrencyRate({
      buy: formFields.newBuyValue,
      sell: formFields.newSellValue,
      pair,
      expiredAt: formFields.expiredAt,
    })
  }

  return (
    <div>
      <h3>
        Currency rate at {currentTime.toString()}
      </h3>
      <hr />
      <div>
        {pair}. Buy: {buy}, Sell: {sell}
      </div>
      <h2>
        Set forced currency rate:
      </h2>
      <div>
        <label htmlFor="newBuyValue">Buy price:</label>
        <input
          name="newBuyValue"
          onChange={updateFormField('newBuyValue')}
          type="number"
          value={formFields.newBuyValue}
        />
      </div>
      <div>
        <label htmlFor="newSellValue">Sell price:</label>
        <input
          name="newSellValue"
          onChange={updateFormField('newSellValue')}
          type="number"
          value={formFields.newSellValue}
        />
      </div>
      <div>
        <label htmlFor="expiredAt">Sell price:</label>
        <input
          name="expiredAt"
          onChange={updateFormField('expiredAt')}
          type="text"
          value={formFields.expiredAt}
        />
      </div>
      <div>
        <button onClick={handleSetForcedCurrencyRate}>Go</button>
      </div>
      <hr />
      <h2>Earlier forced currency rates for {pair}</h2>
      {
        forcedRates.map((forcedCurrencyRate, index) => {
          const forcedTillTime = new Date(forcedCurrencyRate.ticker * 1000)
          return (
            <div key={index}>
              Buy: {forcedCurrencyRate.buy},
              Sell: {forcedCurrencyRate.sell}
              till: {forcedTillTime.toString()}
            </div>
          )
        })
      }
    </div>
  )
}

const currencyRatesShape = {
  pair: PropTypes.string.isRequired,
  buy: PropTypes.string.isRequired,
  sell: PropTypes.string.isRequired,
  ticker: PropTypes.number.isRequired,
}

AdminPage.propTypes = {
  currencyRate: PropTypes.shape(currencyRatesShape),
  forcedRates: PropTypes.arrayOf(PropTypes.shape(currencyRatesShape)),
  setForcedCurrencyRate: PropTypes.func.isRequired,
}

export default AdminPage
