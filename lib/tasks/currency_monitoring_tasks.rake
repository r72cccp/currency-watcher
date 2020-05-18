# frozen_string_literal: true
require 'colorize'

namespace :currency_monitoring do
  desc 'Fetch current currency rate.'
  task fetch_currency_rate: :environment do
    require 'net/http'
    uri = URI('https://api.exmo.com/v1.1/ticker')
    result = Net::HTTP.get(uri)
    parsed_data = JSON.parse(result)
  end
end
