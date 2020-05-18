# frozen_string_literal = true
class WatcherController < ApplicationController
  def index
    @currency_rate_props = {
      currencyRate: CurrencyRate.current.slice(:buy, :pair, :sell, :ticker),
    }
  end
end
