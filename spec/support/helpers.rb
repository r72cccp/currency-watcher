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
