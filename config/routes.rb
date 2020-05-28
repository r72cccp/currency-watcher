# frozen_string_literal: true

Rails.application.routes.draw do
  get '/', to: 'watcher#index'
  get '/admin', to: 'admin#index'
  post '/admin/forced-currency-rates', to: 'admin#update'
end
