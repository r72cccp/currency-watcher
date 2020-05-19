# frozen_string_literal = true
Rails.application.routes.draw do
  get '/', to: 'watcher#index'
  get '/admin', to: 'admin#index'
  post '/admin', to: 'admin#set_forced'
end
