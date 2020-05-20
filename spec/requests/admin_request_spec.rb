require 'rails_helper'

RSpec.describe 'Admins', type: :request do
  describe 'GET /admin' do
    before do
      fetch_currency_rate(ApiExmoComStub.ticker_response_first)
    end

    it 'returns http success' do
      get '/admin'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST /admin' do
    let(:rake_task) { Rake::Task['currency_monitoring:set_forced_currency_rate'] }
    before do
      ENV['pair'] = 'USD/RUB'
      ENV['buy'] = '70.00'
      ENV['sell'] = '74.00'
      ENV['expired_at'] = '2020-05-20 11:13:14 +0500'
    end

    after do
      ENV['pair'] = nil
      ENV['buy'] = nil
      ENV['sell'] = nil
      ENV['expired_at'] = nil
    end

    it 'returns http success' do
      rake_task.reenable
      rake_task.invoke
      post '/admin', params: { pair: 'USD/RUB', buy: 71.11, sell: 73.33, expiredAt: '2020-05-20 11:12:13 +0500' }
      expect(response).to have_http_status(:success)
    end

    it 'forces existed currency rates with bigger expired date' do
      rake_task.reenable
      rake_task.invoke
      post '/admin', params: { pair: 'USD/RUB', buy: 71.11, sell: 73.33, expiredAt: '2020-05-20 11:12:13 +0500' }
      currency_rate = CurrencyRate.current.slice(:buy, :pair, :sell, :ticker)
      expect(currency_rate[:ticker]).to eq 1589955133
    end
  end
end
