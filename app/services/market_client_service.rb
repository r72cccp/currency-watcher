# frozen_string_literal: true

module MarketClientService
  class ExmoAdapter
    class << self
      def get
        result = RestClientService.get('https://api.exmo.com/v1.1/ticker')
        parsed_data = JSON.parse(result)
        parsed_data['USDT_RUB']
      end
    end
  end
end
