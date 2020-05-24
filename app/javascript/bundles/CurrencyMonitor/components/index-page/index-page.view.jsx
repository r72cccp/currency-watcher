import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { subscribeToChannel } from '../../../../channels/ticker_channel'
import { Container, Footer, Header, Column, Root, Row } from '../../shared/styled-components'

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
    <Root id="index-page">
      <Column>
        <Header id="header">
          <h1>Currency rate monitor</h1>
        </Header>
        <Container>
          <Column>
            <Row>
              <h3>
                {at} {currentTime.toString()}
              </h3>
            </Row>
            <Row>
              {pair}. Buy: {buy}, Sell: {sell}
            </Row>
          </Column>
        </Container>
        <Footer id="footer">
          The footer, (c) 2020
          <Link to="/admin">/admin</Link>
        </Footer>
      </Column>
    </Root>
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
