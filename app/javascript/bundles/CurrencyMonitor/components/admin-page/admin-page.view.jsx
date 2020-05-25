import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Column, Container, Footer, FormField, Header, Root, Row } from '../../shared/styled-components'
import { ColumnBlock } from './styled'

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
    <Root>
      <Column>
        <Header>
          <h3>
            Currency rate at {currentTime.toString()}
          </h3>
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
              <label htmlFor="expiredAt">Sell price:</label>
              <input
                name="expiredAt"
                onChange={updateFormField('expiredAt')}
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
