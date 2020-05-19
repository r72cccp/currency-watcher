# frozen_string_literal = true
class AdminController < ApplicationController
  def index
    @currency_rate_props = {
      currencyRate: CurrencyRate.current.slice(:buy, :pair, :sell, :ticker),
    }
    render :index, status: :ok
  end
end
