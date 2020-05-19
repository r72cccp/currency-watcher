# frozen_string_literal = true
class WatcherController < ApplicationController
  def index
    @currency_rate_props = {
      currencyRate: CurrencyRate.current.slice(:buy, :pair, :sell, :ticker),
    }
    render :index, status: :ok
  end
end
