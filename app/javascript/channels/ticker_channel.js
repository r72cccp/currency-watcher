import consumer from "./consumer"

export const subscribeToChannel = (updateTicker) => {
  consumer.subscriptions.create("TickerChannel", {
    connected() {},

    disconnected() {},

    received(data) {
      updateTicker(data)
    },
  })
}
