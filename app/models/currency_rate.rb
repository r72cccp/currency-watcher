# frozen_string_literal = true
class CurrencyRate < ApplicationRecord
  validates :pair, presence: true
  validates :ticker, presence: true

  class << self
    def current
      where(pair: 'USD/RUB').order(:ticker).last
    end

    def push_ticker(data)
      create!(data)
      currency_rate_props = {
        currencyRate: CurrencyRate.current.slice(:buy, :pair, :sell, :ticker),
      }
      ActionCable.server.broadcast 'ticker_channel', content: currency_rate_props
    end
  end
end
