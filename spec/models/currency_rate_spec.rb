# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CurrencyRate do
  context 'with validations' do
    it { is_expected.to validate_presence_of :pair }
    it { is_expected.to validate_presence_of :ticker }
  end

  describe 'fetch currency rate' do
    before do
      fetch_currency_rate(ApiExmoComStub.ticker_response_first)
    end

    it 'creates valid record' do
      expect(described_class.where(pair: 'USD/RUB', ticker: 1589814740).count).to eq 1
    end
  end

  describe 'with model methods' do
    before do
      fetch_currency_rate(ApiExmoComStub.ticker_response_first)
      fetch_currency_rate(ApiExmoComStub.ticker_response_second)
    end

    it 'must returns last currency rate' do
      expect(described_class.current['ticker']).to eq 1589826235
    end
  end

  describe 'with application record' do
    before do
      ENV['ROW_LIMIT'] = '10'
      13.times do |i|
        CurrencyRateService.set_forced(pair: 'USD/RUB', buy: 80 + i, sell: 82 + i, expired_at: '2020-06-01 22:14:00 +0500')
      end
    end

    it 'must only limited row count in model table' do
      expect(described_class.count).to eq ENV['ROW_LIMIT'].to_i
    end
  end
end
