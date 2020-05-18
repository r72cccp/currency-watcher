# frozen_string_literal = true
Rails.application.routes.draw do
  get '/', to: 'watcher#index'
end
