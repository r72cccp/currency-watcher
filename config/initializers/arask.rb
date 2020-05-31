# frozen_string_literal: true

Arask.setup(true) do |arask|
  arask.create script: 'CurrencyRateService.fetch_currency_rate', interval: 10.seconds
  arask.create script: 'CurrencyRateService.broadcast', interval: 10.seconds
end
