import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { subscribeToChannel, unsubscribeFromChannel } from '../../../../channels/ticker_channel'
import { Column, Container, Footer, FormField, Header, Root } from '../../shared/styled-components'
import { ColumnBlock } from './styled'

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'
const utcToLocalDate = (ticker) => {
  return moment.utc(new Date(ticker * 1000)).local().format(dateTimeFormat)
}

const AdminPage = ({ currencyRate, forcedRates, setForcedCurrencyRate, updateTicker }) => {
  const {
    buy,
    pair,
    sell,
    ticker,
  } = currencyRate
  const expiredAt = utcToLocalDate(ticker)
  const [formFields, setFormFields] = useState({
    expiredAt,
    newBuyValue: buy,
    newSellValue: sell,
  })
  const [subscribed, subscribe] = useState(undefined)
  useEffect(() => {
    if (!subscribed) {
      const subscription = subscribeToChannel(updateTicker)
      subscribe(true)
      return () => unsubscribeFromChannel(subscription)
    }
  }, [])

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
    <Root>
      <Column>
        <Header>
          <h2>
            Currency rate at {expiredAt.toString()}
          </h2>
        </Header>
        <Container>
          <ColumnBlock>
            <div>
              {pair}. Buy: {buy}, Sell: {sell}
            </div>
            <h2>
              Set forced currency rate:
            </h2>
            <FormField>
              <label htmlFor="newBuyValue">Buy price:</label>
              <input
                name="newBuyValue"
                onChange={updateFormField('newBuyValue')}
                type="number"
                value={formFields.newBuyValue}
              />
            </FormField>
            <FormField>
              <label htmlFor="newSellValue">Sell price:</label>
              <input
                name="newSellValue"
                onChange={updateFormField('newSellValue')}
                type="number"
                value={formFields.newSellValue}
              />
            </FormField>
            <FormField>
              <label htmlFor="expiredAt">Expired at:</label>
              <input
                name="expiredAt"
                onChange={updateFormField('expiredAt')}
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}"
                title="Please, fill time in format: YYYY-MM-DD HH:MM:SS"
                type="text"
                value={formFields.expiredAt}
              />
            </FormField>
            <FormField>
              <button onClick={handleSetForcedCurrencyRate}>Go</button>
            </FormField>
          </ColumnBlock>
          <ColumnBlock>
            <h2>Earlier forced currency rates for {pair}</h2>
            {
              forcedRates.map((forcedCurrencyRate, index) => {
                const forcedTillTime = utcToLocalDate(forcedCurrencyRate.ticker)
                return (
                  <div key={index}>
                    Buy: {forcedCurrencyRate.buy},
                    Sell: {forcedCurrencyRate.sell}&nbsp;
                    till: {forcedTillTime.toString()}
                  </div>
                )
              })
            }
          </ColumnBlock>
        </Container>
        <Footer>
          The footer, (c) 2020&nbsp;
          <Link to="/">Home page</Link>
        </Footer>
      </Column>
    </Root>
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
