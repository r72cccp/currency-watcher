# frozen_string_literal = true
class WatcherController < ApplicationController
  def index
    @currency_rate_props = {
      currencyRate: CurrencyRate.current.slice(:buy, :pair, :sell, :ticker)
    }
    respond_to do |format|
      format.html { render :index, status: :ok }
    end
  end
end
