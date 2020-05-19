# frozen_string_literal: true
require 'colorize'
require 'net/http'

namespace :currency_monitoring do
  desc 'Fetch current currency rate.'
  task fetch_currency_rate: :environment do
    FetchCurrencyRate.run
    FetchCurrencyRate.broadcast
  end
end
