# frozen_string_literal: true

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      $stdout.puts 'connected'
    end
  end
end
