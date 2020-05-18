# frozen_string_literal: true
require 'colorize'
require 'sidekiq/api'

namespace :sidekiq do
  desc 'List sidekiq queues'
  task list_queues: :environment do
    ap Sidekiq::Queue.all.map(&:name)
  end
end
