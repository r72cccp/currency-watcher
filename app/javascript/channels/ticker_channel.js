import consumer from "./consumer"
console.log('#2 - tickerChannel.js')
consumer.subscriptions.create("TickerChannel", {
  connected() {
    console.log('#5 - connected')
  },

  disconnected() {
    console.log('#9 - disconnected')
  },

  received(data) {
    console.log('#13', { data })
  }
});
