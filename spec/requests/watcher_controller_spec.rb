# frozen_string_literal: true

require 'rails_helper'
RSpec.describe WatcherController, type: :controller do
  describe 'GET #index' do
    before do
      fetch_currency_rate(ApiExmoComStub.ticker_response_first)
    end

    it 'returns a success response' do
      get :index, params: {}
      expect(response).to be_successful
    end
  end
end
