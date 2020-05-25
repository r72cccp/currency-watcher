import consumer from "./consumer"

const channelName = 'TickerChannel'
export const subscribeToChannel = (updateTicker) => {
  return consumer.subscriptions.create(channelName, {
    connected() {},

    disconnected() {},

    received(data) {
      updateTicker(data)
    },
  })
}

export const unsubscribeFromChannel = (subscription) => {
  consumer.subscriptions.remove(subscription)
}
