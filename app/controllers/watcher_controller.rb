# frozen_string_literal = true
class WatcherController < ApplicationController
  def index
    currency_rate = CurrencyRate.current.slice(:buy, :pair, :sell, :ticker)
    @currency_rate_props = {
      currencyRate: currency_rate,
    }
    respond_to do |format|
      format.html { render :index, status: :ok }
    end
  end
end
