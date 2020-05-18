# frozen_string_literal = true
require 'rails_helper'
require 'rake'

RSpec.describe CurrencyRate, active_mocker: true do
  describe 'fetch currency rate', active_mocker:true do
    before do
      Rails.application.load_tasks
      exmo_ticker_response = ApiExmoComStub.ticker_response.to_json
      stub_request(:get, /api.exmo.com/)
        .with(headers: { 'Accept' => '*/*', 'User-Agent' => 'Ruby' })
        .to_return(status: 200, body: exmo_ticker_response, headers: {})
    end

    it 'creates valid record' do
      Rake::Task['currency_monitoring:fetch_currency_rate'].invoke
      expect(described_class.where(pair: 'USD/RUB', ticker: 1589814740).count).to eq 1
    end
  end
end
