import consumer from "./consumer"
import { updateTicker } from '../bundles/CurrencyMonitor/actions/currencyMonitorActionCreators'
console.log('#2 - tickerChannel.js')
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
});
