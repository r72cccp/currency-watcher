# frozen_string_literal = true
Arask.setup(true) do |arask|
  # arask.create task: 'currency_monitoring:fetch_currency_rate', interval: 30.seconds
  arask.create script: 'CurrencyRateService.fetch_currency_rate', interval: 10.seconds
  arask.create script: 'CurrencyRateService.broadcast', interval: 10.seconds
  # arask.on_exception do |exception, arask_job|
  #   raise(exception)
  # end
end
