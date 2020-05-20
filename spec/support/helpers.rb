# frozen_string_literals = true
def fetch_currency_rate(stub)
  exmo_ticker_response = stub.to_json
  stub_request(:get, /api.exmo.com/)
    .with(headers: { 'Accept' => '*/*', 'User-Agent' => 'Ruby' })
    .to_return(status: 200, body: exmo_ticker_response, headers: {})
  rake_task = Rake::Task['currency_monitoring:fetch_currency_rate']
  rake_task.reenable
  rake_task.invoke
end

def set_forced_currency_rate(pair:, buy:, sell:, expired_at:)
  # rake currency_monitoring:set_forced_currency_rate pair='USD/RUB' buy=77.999999 sell=88.999999 expired_at='2020-05-19 23:22:10'
  rake_task = Rake::Task['currency_monitoring:set_forced_currency_rate']
  rake_task.reenable
  ENV['pair'] = pair.to_s
  ENV['buy'] = buy.to_s
  ENV['sell'] = sell.to_s
  ENV['expired_at'] = expired_at
  rake_task.invoke
end
