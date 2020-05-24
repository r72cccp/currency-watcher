# frozen_string_literal: true

class AdminController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :set_currency_rate_props

  def index
    render :index, status: :ok
  end

  def set_forced
    CurrencyRateService.set_forced(forced_params)
    CurrencyRateService.broadcast
    render json: @currency_rate_props, status: :ok
  end

  private

  def set_currency_rate_props
    @currency_rate_props = {
      currencyRate: CurrencyRate.current&.slice(:buy, :pair, :sell, :ticker),
      forcedRates: CurrencyRate.where(forced: true, pair: 'USD/RUB').select(:buy, :pair, :sell, :ticker),
    }
  end

  def forced_params
    result = params.permit(:buy, :pair, :sell, :expiredAt)
    result[:expired_at] = result[:expiredAt]
    result.except(:expiredAt).to_h.symbolize_keys
  end
end
