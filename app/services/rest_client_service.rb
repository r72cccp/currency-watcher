# frozen_string_literals = true
require 'net/http'

class RestClientService
  class << self
    def get(url)
      uri = URI.parse(url)
      client = Net::HTTP.new(uri.host, uri.port)
      client.use_ssl = true if url =~ /^https:/
      client.get(url).body
    end
  end
end
