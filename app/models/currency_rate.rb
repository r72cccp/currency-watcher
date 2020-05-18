# frozen_string_literal = true
class CurrencyRate < ApplicationRecord
  validates :pair, presence: true
  validates :ticker, presence: true

  class << self
    def current
      where(pair: 'USD/RUB').order(:ticker).last
    end
  end
end
