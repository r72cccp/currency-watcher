# frozen_string_literal: true

require 'colorize'
require 'net/http'

namespace :currency_monitoring do
  desc 'Fetch current currency rate.'
  task fetch_currency_rate: :environment do
    CurrencyRateService.fetch_currency_rate
    CurrencyRateService.broadcast
  end

  desc 'Set forced currency rate by Admin.'
  task set_forced_currency_rate: :environment do
    pair_name = ENV['pair']
    buy_price = ENV['buy']
    sell_price = ENV['sell']
    expired_at = ENV['expired_at']
    unless [pair_name, buy_price, sell_price, expired_at].all?
      puts 'ArgumentError: Call task with params:'
      puts "rake currency_monitoring:set_forced_currency_rate pair='USD/RUB' buy=71.5123 sell=71.64554 expired_at='2020-05-19 21:00:02'"
      puts 'your params are:'
      ap pair: pair_name, buy: buy_price, sell: sell_price, expired_at: expired_at, ENV: ENV
      raise ArgumentError
    end
    CurrencyRateService.set_forced(pair: pair_name, buy: buy_price, sell: sell_price, expired_at: expired_at)
    CurrencyRateService.broadcast
  end
end
